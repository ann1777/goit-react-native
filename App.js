import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./Screen/LoginScreen.js";

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
    <>
      {/* <View style={styles.container}> */}
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      <StatusBar style="auto" />
      {/* </View> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
