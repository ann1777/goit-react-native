import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import LoginScreen from "./Screen/LoginScreen";
import { LoginScreenProps } from "./Screen/LoginScreenProps";
import RegistrationScreen from "./Screen/RegistrationScreen";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
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
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen as React.FC<LoginScreenProps>}
            initialParams={{ onLogin: handleLogin }}
          />
        ) : isRegistered ? (
          <Stack.Screen
            name="RegistrationScreen"
            options={{
              headerShown: false, // Optionally hide the header for this screen
            }}
          >
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
