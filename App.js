import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import LoginScreen from "./Screen/LoginScreen"; // Import LoginScreenProps
import RegistrationScreen from "./Screen/RegistrationScreen"; // Import RegistrationScreenProps

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const Stack = createNativeStackNavigator();

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Screen
            name="LoginScreen"
            component={(props) => (
              <LoginScreen {...props} onLogin={handleLogin} />
            )}
          />
        ) : isRegistered ? (
          <Stack.Screen
            name="RegistrationScreen"
            component={(props) => (
              <RegistrationScreen {...props} onRegister={handleRegister} />
            )}
          />
        ) : null}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
