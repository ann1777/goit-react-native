"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expo_font_1 = require("expo-font");
const expo_status_bar_1 = require("expo-status-bar");
const react_1 = __importStar(require("react"));
const LoginScreen_1 = __importDefault(require("./Screen/LoginScreen"));
const RegistrationScreen_1 = __importDefault(require("./Screen/RegistrationScreen"));
function App() {
    const [isRegistered, setIsRegistered] = (0, react_1.useState)(false);
    const [isLogin, setIsLogin] = (0, react_1.useState)(false);
    const [fontsLoaded] = (0, expo_font_1.useFonts)({
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
    return (<>
      {isLogin ? (<LoginScreen_1.default onLogin={handleLogin}/>) : isRegistered ? (<RegistrationScreen_1.default onRegister={handleRegister}/>) : null}
      <expo_status_bar_1.StatusBar style="auto"/>
    </>);
}
exports.default = App;
