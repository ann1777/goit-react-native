import { useFonts } from "expo-font";
import React, { useState } from "react";
import LoginScreen from "./Screen/LoginScreen.js";
import RegistrationScreen from "./Screen/REgistrationScreen.js";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Roboto-Regular.ttf"),
  });
  const [isRegister, setIsRegister] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return <>{!isRegister ? <RegistrationScreen /> : <LoginScreen />}</>;
}
