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
const svgAddButton_1 = __importDefault(require("@assets/svg/svgAddButton"));
const expo_font_1 = require("expo-font");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_navigation_1 = require("react-navigation");
const ScreenBG_png_1 = __importDefault(require("../assets/img/ScreenBG.png"));
const initialState = {
    login: '',
    email: '',
    password: '',
    isPasswordFocus: false,
};
const RegistrationScreen = ({ onRegister, navigation, }) => {
    const [state, setState] = (0, react_1.useState)(initialState);
    const [isAvatar, setAvatar] = (0, react_1.useState)(false);
    const [isShowKeyboard, setIsShowKeyboard] = (0, react_1.useState)(false);
    const [hidePassword, setHidePassword] = (0, react_1.useState)(true);
    const [position, setPosition] = (0, react_1.useState)(new react_native_1.Animated.Value(50));
    const [shift, setShift] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const listenerShow = react_native_1.Keyboard.addListener('keyboardDidShow', () => {
            setShift(true);
        });
        const listenerHide = react_native_1.Keyboard.addListener('keyboardDidHide', () => {
            setShift(false);
        });
        return () => {
            listenerShow.remove();
            listenerHide.remove();
        };
    }, []);
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.timing(position, {
            toValue: shift ? 130 : 50,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [shift]);
    const handleDefaultNavigation = () => {
        navigation.navigate('LoginScreen');
    };
    const [loaded] = (0, expo_font_1.useFonts)({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    });
    if (!loaded) {
        return null;
    }
    const loginHandler = (value) => {
        setState(prevState => ({ ...prevState, login: value }));
    };
    const emailHandler = (value) => {
        setState(prevState => ({ ...prevState, email: value }));
    };
    const passwordHandler = (value) => {
        setState(prevState => ({ ...prevState, password: value }));
    };
    const toggleShowPassword = () => {
        setHidePassword(!hidePassword);
    };
    const setIsPasswordFocus = (value) => {
        setState(prevState => ({ ...prevState, isPasswordFocus: value }));
    };
    const handleSubmit = () => {
        keyboardHide();
        const { login, email, password } = state;
        if (!login || !email || !password) {
            console.error('Please fill in all required fields!');
            return;
        }
        console.log('Submitting form data:', { login, email, password });
        setState(initialState);
    };
    const keyboardHide = () => {
        setIsShowKeyboard(false);
        react_native_1.Keyboard.dismiss();
    };
    return (<react_native_gesture_handler_1.TouchableWithoutFeedback onPress={keyboardHide}>
      <react_native_1.View style={styles.container}>
        <react_native_1.ImageBackground source={ScreenBG_png_1.default} style={styles.imageBg}>
          <react_native_1.View style={styles.formWrap}>
            <react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === 'ios' ? 'padding' : undefined} style={styles.keyboardAvoidingContainer}>
              <react_native_1.View style={styles.avatarWrapper}>
                <react_native_1.Image style={styles.avatar}/>
                <react_native_1.TouchableOpacity style={isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar}>
                  <svgAddButton_1.default width={25} height={25} fill="#ff6c00"/>
                </react_native_1.TouchableOpacity>
              </react_native_1.View>
              <react_native_1.Text style={styles.title}>Реєстрація</react_native_1.Text>
              <react_native_1.View style={styles.inputsContainer}>
                <react_native_1.TextInput key="login" value={state.login} onChangeText={loginHandler} placeholder="Логін" style={styles.input}/>
                <react_native_1.TextInput key="email" value={state.email} onChangeText={emailHandler} placeholder="Адреса електронної пошти" style={styles.input} keyboardType="email-address"/>
                <react_native_1.View style={styles.passwordContainer}>
                  <react_native_1.TextInput value={state.password} onChangeText={passwordHandler} placeholder="Пароль" placeholderTextColor="#BDBDBD" secureTextEntry={hidePassword} style={styles.passwordInput} onFocus={() => {
            setIsShowKeyboard(true);
            setIsPasswordFocus(true);
        }} onBlur={() => {
            setIsPasswordFocus(false);
            setIsShowKeyboard(false);
        }}/>
                  <react_native_1.TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
                    <react_native_1.Text style={styles.toggleText}>
                      {hidePassword ? 'Сховати' : 'Показати'}
                    </react_native_1.Text>
                  </react_native_1.TouchableOpacity>
                </react_native_1.View>
              </react_native_1.View>
              <react_native_1.TouchableOpacity onPress={handleSubmit} style={styles.buttonRg}>
                <react_native_1.Text style={styles.buttonText}>Зареєстуватися</react_native_1.Text>
              </react_native_1.TouchableOpacity>
              <react_native_1.Text style={styles.textQ} onPress={() => navigation.navigate('LoginScreen')}>
                Вже є акаунт?{' '}
                <react_native_1.Text style={{ textDecorationLine: 'underline' }} onPress={() => {
            handleDefaultNavigation();
        }}>
                  Увійти
                </react_native_1.Text>
              </react_native_1.Text>
            </react_native_1.KeyboardAvoidingView>
          </react_native_1.View>
        </react_native_1.ImageBackground>
      </react_native_1.View>
    </react_native_gesture_handler_1.TouchableWithoutFeedback>);
};
const screenSize = react_native_1.Dimensions.get('window');
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        top: 0,
        position: 'absolute',
        height: screenSize.height,
        width: screenSize.width,
    },
    avatarThumb: {
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        position: 'absolute',
        top: -60,
    },
    title: {
        fontFamily: 'Roboro-Medium',
        fontSize: 30,
        color: '#212121',
        marginBottom: 33,
    },
    inputsContainer: { gap: 16, width: '100%', alignItems: 'center' },
    input: {
        padding: 15,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E8E8',
        width: 343,
        height: 50,
        fontSize: 16,
        fontFamily: 'Roboro-Regular',
    },
    inputFocused: {
        borderColor: '#FF6C00',
    },
    inputPasswordShower: {
        fontSize: 16,
        textAlign: 'right',
        fontFamily: 'Roboro-Regular',
        color: '#1B4371',
        position: 'absolute',
        bottom: 30,
        left: 70,
    },
    scrollViewContainer: {
        minHeight: screenSize.height,
        justifyContent: 'flex-end',
    },
    formWrapper: {
        paddingTop: 92,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    button: {
        width: 343,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginTop: 43,
        marginBottom: 16,
    },
    buttonText: {
        fontFamily: 'Roboro-Regular',
        fontSize: 16,
        color: '#fff',
    },
    linkText: {
        fontFamily: 'Roboro-Regular',
        fontSize: 16,
        color: '#1B4371',
    },
});
exports.default = (0, react_navigation_1.withNavigation)(RegistrationScreen);
