import {Feather, FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {Camera} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import {addDoc, collection} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {db, storage} from '../firebase/config';

const getDataFromFirestore = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'users'));
    console.log(snapshot);
    snapshot.forEach(doc => console.log(`${doc.id} =>`, doc.data()));
    return snapshot.map(doc => ({id: doc.id, data: doc.data()}));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const writeDataToFirestore = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

export const CreatePostsScreen = () => {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [coords, setCoords] = useState(null);
  const [country, setCountry] = useState(null);
  const navigation = useNavigation();
  const {userId, nickname} = useSelector(state => state.auth);

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
    })();
    (async () => {
      const location = await Location.getCurrentPositionAsync();
      setCoords(location);
    })();

    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  const getLocation = async () => {
    try {
      const address = await Location.reverseGeocodeAsync({
        latitude: coords.coords.latitude,
        longitude: coords.coords.longitude,
      });
      setLocation(`${address[0].city}, ${address[0].country}`);
      setCountry(address[0].country);
    } catch (error) {
      console.log(error);
    }
  };

  const takePicture = async () => {
    try {
      const {uri} = await cameraRef.takePictureAsync();
      setImg(uri);
      await MediaLibrary.createAssetAsync(uri);
      getLocation();
      writeDataToFirestore();
    } catch (error) {
      console.log(error);
    }
  };

  async function pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        setImg(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const uploadImg = async () => {
    try {
      const response = await fetch(img);
      const file = await response.blob();
      await uploadBytes(ref(storage, `photos/${file._data.blobId}`), file);
      const photoUrl = await getDownloadURL(
        ref(storage, `photos/${file._data.blobId}`),
      );
      return photoUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPost = async () => {
    try {
      const img = await uploadImg();
      await addDoc(collection(db, 'posts'), {
        userId,
        nickname,
        img,
        title,
        location,
        coords: coords.coords,
        date: Date.now().toString(),
        country,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSharePost = () => {
    if (!img || !title || !location) {
      return Alert.alert('Fill in all fields');
    }
    getLocation();
    uploadPost();
    navigation.navigate('InitialPostsScreen');
    reset();
  };
  function reset() {
    setImg(null);
    setTitle('');
    setLocation(null);
  }

  const handleForm = () => {
    console.log({name, location, photo, locationName});
    navigation.navigate('Map');
    getDataFromFirestore();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.section}>
        <ScrollView>
          {img ? (
            <View style={styles.createImgWrapper}>
              <Image style={styles.imgStyle} source={{uri: img}} />

              <Pressable
                style={{
                  ...styles.iconWrapper,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                }}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  );
                }}>
                <FontAwesome name="camera" size={24} color="#FFFFFF" />
              </Pressable>
            </View>
          ) : (
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <Pressable
                style={styles.flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  ).handlePhoto();
                }}>
                <Text style={{fontSize: 18, color: 'white'}}> Flip </Text>
              </Pressable>

              <Pressable style={styles.iconWrapper} onPress={takePicture}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </Pressable>
            </Camera>
          )}

          <Pressable onPress={pickImage}>
            {img ? (
              <Text style={styles.btnLoadText}>Редагувати фото</Text>
            ) : (
              <Text style={styles.btnLoadText}>Завантажте фото</Text>
            )}
          </Pressable>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={500}
            style={{flex: 1}}>
            <TextInput
              value={title}
              placeholder="Назва..."
              onChangeText={text => setTitle(text)}
              placeholderTextColor="#BDBDBD"
              style={{...styles.inputCreate, marginBottom: 16}}
            />
            <View style={styles.inputMapWrapper}>
              <Feather
                style={styles.iconMap}
                name="map-pin"
                size={24}
                color="#BDBDBD"
              />
              <TextInput
                value={location}
                placeholder="Місцевість..."
                onChangeText={text => setLocation(text)}
                placeholderTextColor="#BDBDBD"
                style={{...styles.inputCreate, paddingLeft: 28}}
              />
            </View>
            <Pressable
              style={{
                ...styles.puplishBtn,
                backgroundColor: img ? '#FF6C00' : '#F6F6F6',
              }}
              onPress={handleSharePost}>
              <Text
                style={{
                  ...styles.puplishBtnText,
                  color: img ? '#FFFFFF' : '#BDBDBD',
                }}>
                Опублікувати
              </Text>
            </Pressable>
          </KeyboardAvoidingView>
        </ScrollView>

        <Pressable style={styles.deleteBtn} onPress={reset}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#ffffff',
  },
  createImgWrapper: {
    width: '100%',
    height: 240,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  camera: {
    width: '100%',
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  flipContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  btnLoadText: {
    marginBottom: 32,
    fontFamily: 'Roboto400',
    fontSize: 16,
    color: '#BDBDBD',
  },
  inputCreate: {
    width: '100%',
    paddingVertical: 16,
    fontFamily: 'Roboto400',
    fontSize: 16,
    color: '#212121',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  inputMapWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  iconMap: {
    position: 'absolute',
    top: '50%',
    transform: [{translateY: -12}],
    flexDirection: 'row',
    alignItems: 'center',
  },
  puplishBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  },
  puplishBtnText: {
    fontFamily: 'Roboto400',
    fontSize: 16,
    color: '#BDBDBD',
  },
  deleteBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 32,
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
  },
});
