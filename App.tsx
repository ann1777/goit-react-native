"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_font_1 = require("expo-font");
var react_1 = require("react");
var react_native_1 = require("react-native");
var LoginScreen_1 = require("./Screen/LoginScreen");
var RegistrationScreen_1 = require("./Screen/RegistrationScreen");
function App() {
    var _a = (0, react_1.useState)(false), isRegistered = _a[0], setIsRegistered = _a[1];
    var _b = (0, react_1.useState)(false), isLogin = _b[0], setIsLogin = _b[1];
    var fontsLoaded = (0, expo_font_1.useFonts)({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    })[0];
    var handleRegister = function () {
        setIsRegistered(true);
    };
    var handleLogin = function () {
        setIsLogin(true);
    };
    if (!fontsLoaded) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isLogin ? (react_1.default.createElement(LoginScreen_1.default, { onLogin: handleLogin })) : (react_1.default.createElement(RegistrationScreen_1.default, { onRegister: handleRegister })),
        react_1.default.createElement(react_native_1.StatusBar, { style: "auto" })));
}
exports.default = App;
