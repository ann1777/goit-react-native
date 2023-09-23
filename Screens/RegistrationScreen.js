import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import backgroundImg from '../assets/ScreenBG.png';
import SvgAddButton from '../assets/svg/svgAddButton';
import {togglePasswordVisibility} from '../helpers/passwordVisibility';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {AntDesign} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {authSignUpUser} from '../redux/operations';
import {useDispatch} from 'react-redux';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {storage} from '../firebase/config';

const initialState = {
  login: '',
  email: '',
  password: '',
  isPasswordFocus: false,
};

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const [isAvatar, setAvatar] = useState(false);
  const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({1: false, 2: false, 3: false});

  const loginHandler = value => {
    setState(prevState => ({...prevState, login: value}));
  };

  const emailHandler = value => {
    setState(prevState => ({...prevState, email: value}));
  };

  const passwordHandler = value => {
    setState(prevState => ({...prevState, password: value}));
  };

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const setIsPasswordFocus = value => {
    setState(prevState => ({...prevState, isPasswordFocus: value}));
  };

  const handleSubmit = () => {
    keyboardHide();
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleLoginFocus = () => {
    setLoginFocus(!loginFocus);
  };
  const handleEmailFocus = () => {
    setEmailFocus(!emailFocus);
  };
  const handlePasswordFocus = () => {
    setPasswordFocus(!passwordFocus);
  };

  const saveAvatar = async () => {
    try {
      const response = await fetch(avatar);
      const file = await response.blob();
      await uploadBytes(ref(storage, `avatars/${file._data.blobId}`), file);
      const imgUrl = await getDownloadURL(
        ref(storage, `avatars/${file._data.blobId}`),
      );
      return imgUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async () => {
    if (!login || !email || !password) {
      return Alert.alert('Fill in all fields');
    }
    const avatar = await saveAvatar();
    dispatch(authSignUpUser({email, password, login, avatar}));
    resetForm();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  function resetForm() {
    setLogin('');
    setEmail('');
    setPassword('');
    setAvatar(null);
  }

  return (
    <>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <ImageBackground source={backgroundImg} style={styles.imageBg}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardAvoidingContainer}>
              <View style={styles.registerSection}>
                <View style={styles.avatarWrapper}>
                  <Image source={{uri: avatar}} style={styles.avatarImg} />
                  <TouchableOpacity
                    style={
                      isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar
                    }>
                    {isAvatar ? (
                      <Pressable
                        style={
                          isAvatar
                            ? styles.btnAddAvatarSvgLoad
                            : styles.btnAddAvatarSvg
                        }
                        onPress={() => {
                          setAvatar(null);
                        }}>
                        <AntDesign
                          name="closecircleo"
                          size={25}
                          color="#BDBDBD"
                        />
                      </Pressable>
                    ) : (
                      <Pressable style={styles.avatarIcon} onPress={pickImage}>
                        <AntDesign
                          name="pluscircleo"
                          size={25}
                          color="#FF6C00"
                        />
                      </Pressable>
                    )}
                  </TouchableOpacity>
                </View>

                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  key="login"
                  value={login}
                  onChangeText={loginHandler}
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  style={[styles.input, isFocused[1] && styles.isFocused]}
                  onFocus={() => onFocusHandler({1: true})}
                  onBlur={() => onFocusHandler({1: false})}
                />
                <TextInput
                  key="email"
                  value={state.email}
                  onChangeText={emailHandler}
                  placeholder="Адреса електронної пошти"
                  style={[styles.input, isFocused[2] && styles.isFocused]}
                  keyboardType="email-address"
                  onFocus={() => onFocusHandler({2: true})}
                  onBlur={() => onFocusHandler({2: false})}
                />
                <View
                  key="passwd"
                  style={[
                    styles.passwordContainer,
                    isFocused[3] && styles.isFocused,
                  ]}>
                  <TextInput
                    value={state.password}
                    onChangeText={passwordHandler}
                    placeholder="Пароль"
                    placeholderTextColor={'#BDBDBD'}
                    secureTextEntry={!showPassword}
                    style={styles.passwordInput}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setIsPasswordFocus(true);
                      onFocusHandler({3: true});
                    }}
                    onBlur={() => {
                      setIsPasswordFocus(false);
                      setIsShowKeyboard(false);
                      onFocusHandler({3: false});
                    }}
                  />
                  <Pressable
                    onPress={toggleShowPassword}
                    style={styles.toggleButton}>
                    <Text style={styles.toggleText}>
                      {showPassword ? 'Сховати' : 'Показати'}
                    </Text>
                  </Pressable>
                  <View style={{width: '100%'}}>
                    <TouchableOpacity
                      onPress={handleSignUp}
                      style={styles.formBtn}>
                      <Text style={styles.formBtnTitle}>Зареєструватися</Text>
                    </TouchableOpacity>

                    <Pressable
                      onPress={() => navigation.navigate('LoginScreen')}>
                      <Text style={styles.linkToLogin}>
                        Вже є акаунт? Увійти
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },

  imageBg: {
    flex: 1,
    top: 0,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  registerSection: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatarWrapper: {
    position: 'absolute',
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  avatarImg: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  btnAddAvatar: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,

    alignItems: 'center',
    alignContent: 'center',

    width: 25,
    height: 25,

    color: '#ff6c00',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },

  btnAddAvatarLoad: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,

    alignItems: 'center',
    alignContent: 'center',

    width: 25,
    height: 25,

    color: '#ff6c00',
    backgroundColor: '#ffffff',
    borderRadius: 50,

    transform: [{rotate: '45deg'}],
  },
  btnAddAvatarSvg: {
    fill: '#ff6c00',
    stroke: '#ff6c00',
    backgroundColor: '#ffffff',
  },
  btnAddAvatarSvgLoad: {
    fill: '#bdbdbd',
    stroke: '#e8e8e8',
    backgroundColor: '#ffffff',
  },

  title: {
    marginTop: 92,
    marginBottom: 33,
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35.16,
    letterSpacing: 1,
    textAlign: 'center',
    color: 'rgba(33, 33, 33, 1)',
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(232, 232, 232, 1)',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    marginBottom: 16,
  },

  isFocused: {
    borderColor: '1px solid rgba(255, 108, 0, 1)',
    backgroundColor: '#ffffff',
  },

  passwordContainer: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(232, 232, 232, 1)',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'normal',
    lineHeight: 18.75,
  },

  toggleButton: {
    padding: 8,
  },

  toggleText: {
    textAlign: 'center',
    paddingHorizontal: 8,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,

    color: 'rgba(27, 67, 113, 1)',
  },

  buttonRg: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',

    alignItems: 'center',
    justifyContent: 'center',
    height: 51,
    padding: 16,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 108, 0, 1)',
  },

  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    fontFamily: 'Roboto-Regular',
  },

  textQ: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    textAlign: 'center',
    color: 'rgba(27, 67, 113, 1)',
  },
});
exports.default = (0, react_navigation_1.withNavigation)(RegistrationScreen);
