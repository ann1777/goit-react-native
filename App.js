import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import LoginScreen from "./Screen/LoginScreen.js";
import RegistrationScreen from "./Screen/RegistrationScreen.js";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {isRegistered ? (
        <LoginScreen onRegister={() => setIsRegistered(false)} />
      ) : (
        <RegistrationScreen onRegister={() => setIsRegistered(true)} />
      )}
      <StatusBar style="auto" />
    </>
  );
}
