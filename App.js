import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import LoginScreen from "./Screen/LoginScreen";
import RegistrationScreen from "./Screen/RegistrationScreen";
function App() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
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
    return (React.createElement(React.Fragment, null,
        isLogin ? (React.createElement(LoginScreen, { onLogin: handleLogin })) : isRegistered ? (React.createElement(RegistrationScreen, { onRegister: handleRegister })) : null,
        React.createElement(StatusBar, { style: "auto" })));
}
export default App;
