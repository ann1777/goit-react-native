import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import backgroundImg from "../assets/img/ScreenBG.png";
import SvgAddButton from "../assets/svg/svgAddButton.jsx";

const initialState = {
  login: "",
  email: "",
  password: "",
  isPasswordFocus: false,
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isAvatar, setAvatar] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const loginHandler = (value: string) => {
    setState((prevState) => ({ ...prevState, login: value }));
  };

  const emailHandler = (value: string) => {
    setState((prevState) => ({ ...prevState, email: value }));
  };

  const passwordHandler = (value: string) => {
    setState((prevState) => ({ ...prevState, password: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const setIsPasswordFocus = (value: boolean) => {
    setState((prevState) => ({ ...prevState, isPasswordFocus: value }));
  };

  const handleSubmit = () => {
    keyboardHide();
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImg} style={styles.imageBg}>
          <View style={styles.formWrap}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.keyboardAvoidingContainer}
            >
              <View style={styles.avatarWrapper}>
                <Image style={styles.avatar} />
                <TouchableOpacity
                  style={
                    isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar
                  }
                >
                  <SvgAddButton
                    style={
                      isAvatar
                        ? styles.btnAddAvatarSvgLoad
                        : styles.btnAddAvatarSvg
                    }
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                key="login"
                value={state.login}
                onChangeText={loginHandler}
                placeholder="Логін"
                style={styles.input}
              />
              <TextInput
                key="email"
                value={state.email}
                onChangeText={emailHandler}
                placeholder="Адреса електронної пошти"
                style={styles.input}
                keyboardType="email-address"
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  value={state.password}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
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
                <Pressable
                  onPress={toggleShowPassword}
                  style={styles.toggleButton}
                >
                  <Text style={styles.toggleText}>
                    {showPassword ? "Сховати" : "Показати"}
                  </Text>
                </Pressable>
              </View>
              {!isShowKeyboard && (
                <View>
                  <Pressable onPress={handleSubmit} style={styles.buttonRg}>
                    <Text style={styles.buttonText}>Зареєстуватися</Text>
                  </Pressable>
                  <Text style={styles.textQ}>Вже є акаунт? Увійти</Text>
                </View>
              )}
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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