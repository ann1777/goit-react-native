import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from 'Screen/RegistrationScreen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import LoginScreen from './Screen/LoginScreen';
import { LoginScreenProps } from './Screen/LoginScreenProps';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  setFontLoaded(true);
    }

    loadFonts();
  }, []);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  if (!isFontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen as React.FC<LoginScreenProps>}
            initialParams={{onLogin: handleLogin}}
          />
        ) : isRegistered ? (
          <Stack.Screen
            name="RegistrationScreen"
            component={(props: {navigation: any; route: any}) => (
              <RegistrationScreen {...props} onRegister={handleRegister} onLogin={handleLogin}/>
            )}
            options={{
              headerShown: false,
            }}
            initialParams={{onRegister: handleRegister}}
          />
        ) : null}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
