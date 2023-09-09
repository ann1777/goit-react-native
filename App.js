import { useFonts } from "expo-font";
import React from "react";
import RegistrationScreen from "./Screen/REgistrationScreen.js";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  // const [isRegister, setIsRegister] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  // return <>{!isRegister ? <RegistrationScreen /> : <LoginScreen />}</>;
  return (
    <RegistrationScreen />
    /* <LoginScreen /> */
  );
}
