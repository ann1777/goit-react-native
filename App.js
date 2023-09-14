import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // Add this import
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import LoginScreen from "./Screen/LoginScreen";
import RegistrationScreen from "./Screen/RegistrationScreen";
import RobotoBoldFont from "./assets/fonts/Roboto-Bold.ttf";
import RobotoMediumFont from "./assets/fonts/Roboto-Medium.ttf";
import RobotoRegularFont from "./assets/fonts/Roboto-Regular.ttf";

const Stack = createStackNavigator(); // Create a stack navigator

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": RobotoRegularFont,
    "Roboto-Medium": RobotoMediumFont,
    "Roboto-Bold": RobotoBoldFont,
  });

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isLogin ? (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        ) : isRegistered ? (
          <Stack.Screen name="Registration">
            {(props) => (
              <RegistrationScreen {...props} onRegister={handleRegister} />
            )}
          </Stack.Screen>
        ) : null}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
