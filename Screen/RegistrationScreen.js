import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import backgroundImg from "../assets/ScreenBG.png";

const initialState = {
  login: "",
  email: "",
  password: "",
  isPasswordFocus: false,
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
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

  const loginHandler = (value) => {
    setState((prevState) => ({ ...prevState, login: value }));
  };

  const emailHandler = (value) => {
    setState((prevState) => ({ ...prevState, email: value }));
  };

  const passwordHandler = (value) => {
    setState((prevState) => ({ ...prevState, password: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const setIsPasswordFocus = (value) => {
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
        <ImageBackground source={backgroundImg} style={styles.image}>
          <View style={styles.formWrap}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.keyboardAvoidingContainer}
            >
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
            </KeyboardAvoidingView>
            {!isShowKeyboard && (
              <>
                <Pressable onPress={handleSubmit} style={styles.buttonRg}>
                  <Text style={styles.buttonText}>Зареєстуватися</Text>
                </Pressable>
                <Text style={styles.textQ}>Вже є акаунт? Увійти</Text>
              </>
            )}
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

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  formWrap: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },

  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35.16,
    letterSpacing: 1,
    textAlign: "center",
    color: "rgba(33, 33, 33, 1)",
    marginBottom: 16,
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
