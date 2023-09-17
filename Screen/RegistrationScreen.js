"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("@react-navigation/native");
const expo_font_1 = require("expo-font");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const iconAdd_1 = __importDefault(require("@assets/svg/iconAdd.js"));
const ScreenBG_png_1 = __importDefault(require("../assets/img/ScreenBG.png"));
const initialState = {
  login: "",
  email: "",
  password: "",
  isPasswordFocus: false,
};
function RegistrationScreen({ onRegister }) {
  const [state, setState] = (0, react_1.useState)(initialState);
  const [isAvatar, setAvatar] = (0, react_1.useState)(false);
  const [isShowKeyboard, setIsShowKeyboard] = (0, react_1.useState)(false);
  const [hidePassword, setHidePassword] = (0, react_1.useState)(true);
  const [position, setPosition] = (0, react_1.useState)(
    new react_native_1.Animated.Value(50)
  );
  const [shift, setShift] = (0, react_1.useState)(false);
  const navigation = (0, native_1.useNavigation)();
  (0, react_1.useEffect)(() => {
    const listenerShow = react_native_1.Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setShift(true);
      }
    );
    const listenerHide = react_native_1.Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setShift(false);
      }
    );
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
    navigation.navigate("LoginScreen");
  };
  const [loaded] = (0, expo_font_1.useFonts)({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const loginHandler = (value) => {
    setState((prevState) =>
      Object.assign(Object.assign({}, prevState), { login: value })
    );
  };
  const emailHandler = (value) => {
    setState((prevState) =>
      Object.assign(Object.assign({}, prevState), { email: value })
    );
  };
  const passwordHandler = (value) => {
    setState((prevState) =>
      Object.assign(Object.assign({}, prevState), { password: value })
    );
  };
  const toggleShowPassword = () => {
    setHidePassword(!hidePassword);
  };
  const setIsPasswordFocus = (value) => {
    setState((prevState) =>
      Object.assign(Object.assign({}, prevState), { isPasswordFocus: value })
    );
  };
  const handleSubmit = () => {
    keyboardHide();
    const { login, email, password } = state;
    if (!login || !email || !password) {
      console.error("Please fill in all required fields!");
      return;
    }
    console.log("Submitting form data:", { login, email, password });
    setState(initialState);
  };
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    react_native_1.Keyboard.dismiss();
  };
  return (
    <react_native_gesture_handler_1.TouchableWithoutFeedback
      onPress={keyboardHide}
    >
      <react_native_1.View style={styles.container}>
        <react_native_1.ImageBackground
          source={ScreenBG_png_1.default}
          style={styles.imageBg}
        >
          <react_native_1.View style={styles.formWrap}>
            <react_native_1.KeyboardAvoidingView
              behavior={
                react_native_1.Platform.OS === "ios" ? "padding" : undefined
              }
              style={styles.keyboardAvoidingContainer}
            >
              <react_native_1.View style={styles.avatarWrapper}>
                <react_native_1.Image style={styles.avatar} />
                <react_native_1.TouchableOpacity
                  style={
                    isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar
                  }
                >
                  <iconAdd_1.default
                    style={
                      isAvatar
                        ? styles.btnAddAvatarSvgLoad
                        : styles.btnAddAvatarSvg
                    }
                  />
                </react_native_1.TouchableOpacity>
              </react_native_1.View>
              <react_native_1.Text style={styles.title}>
                Реєстрація
              </react_native_1.Text>
              <react_native_1.View style={styles.inputsContainer}>
                <react_native_1.TextInput
                  key="login"
                  value={state.login}
                  onChangeText={loginHandler}
                  placeholder="Логін"
                  style={styles.input}
                />
                <react_native_1.TextInput
                  key="email"
                  value={state.email}
                  onChangeText={emailHandler}
                  placeholder="Адреса електронної пошти"
                  style={styles.input}
                  keyboardType="email-address"
                />
                <react_native_1.View style={styles.passwordContainer}>
                  <react_native_1.TextInput
                    value={state.password}
                    onChangeText={passwordHandler}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={hidePassword}
                    style={styles.passwordInput}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setIsPasswordFocus(true);
                    }}
                    onBlur={() => {
                      setIsPasswordFocus(false);
                      setIsShowKeyboard(false);
                    }}
                  />
                  <react_native_1.TouchableOpacity
                    onPress={toggleShowPassword}
                    style={styles.toggleButton}
                  >
                    <react_native_1.Text style={styles.toggleText}>
                      {hidePassword ? "Сховати" : "Показати"}
                    </react_native_1.Text>
                  </react_native_1.TouchableOpacity>
                </react_native_1.View>
              </react_native_1.View>
              <react_native_1.TouchableOpacity
                onPress={handleSubmit}
                style={styles.buttonRg}
              >
                <react_native_1.Text style={styles.buttonText}>
                  Зареєстуватися
                </react_native_1.Text>
              </react_native_1.TouchableOpacity>
              <react_native_1.Text
                style={styles.textQ}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                Вже є акаунт?{" "}
                <react_native_1.Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    handleDefaultNavigation();
                  }}
                >
                  Увійти
                </react_native_1.Text>
              </react_native_1.Text>
            </react_native_1.KeyboardAvoidingView>
          </react_native_1.View>
        </react_native_1.ImageBackground>
      </react_native_1.View>
    </react_native_gesture_handler_1.TouchableWithoutFeedback>
  );
}

const screenSize = react_native_1.Dimensions.get("screen");
const styles = react_native_1.StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    top: 0,
    position: "absolute",
    height: screenSize.height,
    width: screenSize.width,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    top: 0,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  formWrap: {
    top: "19%",
    width: "100%",
    height: "67.61%",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  avatarWrapper: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  btnAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    alignItems: "center",
    alignContent: "center",
    width: 25,
    height: 25,
    color: "#ff6c00",
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  btnAddAvatarLoad: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    alignItems: "center",
    alignContent: "center",
    width: 25,
    height: 25,
    color: "#ff6c00",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    transform: [{ rotate: "45deg" }],
  },
  btnAddAvatarSvg: {
    fill: "#ff6c00",
    stroke: "#ff6c00",
    backgroundColor: "#ffffff",
  },
  btnAddAvatarSvgLoad: {
    fill: "#bdbdbd",
    stroke: "#e8e8e8",
    backgroundColor: "#ffffff",
  },
  title: {
    paddingTop: 32,
    marginTop: 52,
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35.16,
    letterSpacing: 1,
    textAlign: "center",
    color: "rgba(33, 33, 33, 1)",
    // marginBottom: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(232, 232, 232, 1)",
    backgroundColor: "rgba(246, 246, 246, 1)",
    marginBottom: 16,
    paddingLeft: 16,
  },
  passwordContainer: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(232, 232, 232, 1)",
    backgroundColor: "rgba(246, 246, 246, 1)",
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "normal",
    lineHeight: 18.75,
  },
  toggleButton: {
    padding: 8,
  },
  toggleText: {
    textAlign: "center",
    paddingHorizontal: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    color: "rgba(27, 67, 113, 1)",
  },
  buttonRg: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    padding: 16,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: "rgba(255, 108, 0, 1)",
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    fontFamily: "Roboto-Regular",
  },
  textQ: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
    color: "rgba(27, 67, 113, 1)",
  },
});

export default RegistrationScreen;
