import {useFonts} from 'expo-font';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import {HomeScreen} from './Screens/HomeScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate
          loading={<Text>Loading...</Text>}
          persistor={store.persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>
      {/* <View style={styles.container}>
        <ImageBackground source={bgImg} resizeMode="cover" style={styles.image}>
          <RegistrationScreen />
        </ImageBackground>
        <StatusBar style="auto" />
      </View> */}
    </>
  );
}
exports.default = App;
