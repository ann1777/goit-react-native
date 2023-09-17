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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_navigation_1 = require("react-navigation");
const ScreenBG_png_1 = __importDefault(require("../assets/img/ScreenBG.png"));
const initialState = {
  email: "",
  password: "",
  isPasswordFocus: false,
};
const LoginScreen = ({ onLogin, navigation }) => {
  const [state, setState] = (0, react_1.useState)(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = (0, react_1.useState)(false);
  const [showPassword, setShowPassword] = (0, react_1.useState)(false);
  const [isLoggedIn, setIsLoggedIn] = (0, react_1.useState)(false);
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
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const setIsPasswordFocus = (value) => {
    setState((prevState) =>
      Object.assign(Object.assign({}, prevState), { isPasswordFocus: value })
    );
  };
  const handleSubmit = () => {
    keyboardHide();
    setState(initialState);
    setIsLoggedIn(true);
    if (isLoggedIn) {
      navigation.navigate("HomeScreen");
    }
    if (onLogin) {
      onLogin();
    }
  };
  const keyboardHide = () => {
    react_native_1.Keyboard.dismiss();
  };
  return (
    <react_native_1.View style={styles.container}>
      <react_native_1.ImageBackground
        source={ScreenBG_png_1.default}
        style={styles.background}
      >
        <react_native_1.View style={styles.loginWrap}>
          <react_native_1.TouchableWithoutFeedback onPress={keyboardHide}>
            <react_native_1.KeyboardAvoidingView
              behavior={
                react_native_1.Platform.OS === "ios" ? "padding" : "height"
              }
              style={styles.keyboardAvoidingContainer}
            >
              <react_native_1.Text style={styles.title}>
                Увійти
              </react_native_1.Text>
              <react_native_1.View style={styles.inputContainer}>
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
                    placeholder="•••••••••••••••"
                    secureTextEntry={!showPassword}
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
                  <react_native_1.Pressable onPress={toggleShowPassword}>
                    <react_native_1.Text style={styles.toggleText}>
                      {showPassword ? "Сховати" : "Показати"}
                    </react_native_1.Text>
                  </react_native_1.Pressable>
                </react_native_1.View>
                <react_native_1.Pressable
                  onPress={handleSubmit}
                  style={styles.buttonRg}
                >
                  <react_native_1.Text style={styles.buttonText}>
                    Увійти
                  </react_native_1.Text>
                </react_native_1.Pressable>
                <react_native_1.Text style={styles.textQ}>
                  Немає акаунту?{" "}
                  <react_native_1.Text
                    style={{
                      textDecorationLine: "underline",
                    }}
                  >
                    Зареєструватися
                  </react_native_1.Text>
                </react_native_1.Text>
              </react_native_1.View>
            </react_native_1.KeyboardAvoidingView>
          </react_native_1.TouchableWithoutFeedback>
        </react_native_1.View>
      </react_native_1.ImageBackground>
    </react_native_1.View>
  );
};
const styles = react_native_1.StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  loginWrap: {
    width: "100%",
    height: "60.2%",
    top: "39.8%",
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  title: {
    fontFamily: "RobotoRegular",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35.16,
    letterSpacing: 1,
    textAlign: "center",
    color: "rgba(33, 33, 33, 1)",
    marginTop: 32,
    marginBottom: 32,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(232, 232, 232, 1)",
    backgroundColor: "rgba(246, 246, 246, 1)",
    placeholderTextColor: "#BDBDBD",
    marginBottom: 16,
    paddingLeft: 16,
  },
  passwordContainer: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(232, 232, 232, 1)",
    backgroundColor: "rgba(246, 246, 246, 1)",
    placeholderTextColor: "#BDBDBD",
    marginBottom: 43,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordInput: {
    flex: 1,
    height: 50,
    width: "100%",
    fontSize: 16,
    fontFamily: "RobotoRegular",
    fontWeight: "normal",
    lineHeight: 18.75,
  },
  toggleText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    color: "rgba(27, 67, 113, 1)",
  },
  buttonRg: {
    fontFamily: "RobotoRegular",
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
    fontFamily: "RobotoRegular",
  },
  textQ: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
    color: "rgba(27, 67, 113, 1)",
  },
});
exports.default = (0, react_navigation_1.withNavigation)(LoginScreen);
