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
const native_1 = require("@react-navigation/native");
const native_stack_1 = require("@react-navigation/native-stack");
const RegistrationScreen_1 = __importDefault(require("Screen/RegistrationScreen"));
const Font = __importStar(require("expo-font"));
const expo_status_bar_1 = require("expo-status-bar");
const react_1 = __importStar(require("react"));
const LoginScreen_1 = __importDefault(require("./Screen/LoginScreen"));
function App() {
    const [isRegistered, setIsRegistered] = (0, react_1.useState)(false);
    const [isFontLoaded, setFontLoaded] = (0, react_1.useState)(false);
    const [isLogin, setIsLogin] = (0, react_1.useState)(false);
    const Stack = (0, native_stack_1.createNativeStackNavigator)();
    (0, react_1.useEffect)(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
                'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
                'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            });
            setFontLoaded(true);
        }
        loadFonts();
    }, []);
    const handleRegister = () => {
        setIsRegistered(true);
    };
    const handleLogin = () => {
        setIsLogin(true);
    };
    if (!isFontLoaded) {
        return null;
    }
    return (<native_1.NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (<Stack.Screen name="LoginScreen" component={LoginScreen_1.default} initialParams={{ onLogin: handleLogin }}/>) : isRegistered ? (<Stack.Screen name="RegistrationScreen" component={(props) => (<RegistrationScreen_1.default {...props} onRegister={handleRegister} onLogin={handleLogin}/>)} options={{
                headerShown: false,
            }} initialParams={{ onRegister: handleRegister }}/>) : null}
      </Stack.Navigator>
      <expo_status_bar_1.StatusBar style="auto"/>
    </native_1.NavigationContainer>);
}
exports.default = App;
