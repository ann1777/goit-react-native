import { useFonts } from "expo-font";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
import LoginScreen from "./Screen/LoginScreen";
import RegistrationScreen from "./Screen/RegistrationScreen";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": RobotoRegular,
    "Roboto-Medium": RobotoMedium,
    "Roboto-Bold": RobotoBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {isLogin ? (
        <LoginScreen onLogin={handleLogin} />
      ) : isRegistered ? (
        <RegistrationScreen onRegister={handleRegister} />
      ) : null}{" "}
      <StatusBar style="auto" />
    </>
  );
}

export default App;
