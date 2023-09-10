import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
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
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleSubmit = () => {
    handleKeyboardHide();
    setState(initialState);
  };

  const handleFocus = () => {
    setIsShowKeyboard(true);
    setIsEmailFocus(true);
  };

  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const emailHandler = (value) => {
    setState((prevState) => ({ ...prevState, email: value }));
  };

  const passwordHandler = (value) => {
    setState((prevState) => ({ ...prevState, password: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImg} style={styles.bgImage}>
          <View style={styles.formWrap}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={styles.keyboardView}
            >
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                value={state.email}
                onChangeText={emailHandler}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                style={[
                  styles.input,
                  {
                    borderColor: isEmailFocus ? "#ff6c00" : "#e8e8e8",
                    backgroundColor: isEmailFocus ? "#fff" : "#f6f6f6",
                  },
                ]}
                onFocus={handleFocus}
                onBlur={() => setIsEmailFocus(false)}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  value={state.password}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={!showPassword}
                  style={styles.passwordInput}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => setIsShowKeyboard(false)}
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
              <View>
                <Pressable onPress={handleSubmit} style={styles.buttonLg}>
                  <Text style={styles.buttonText}>Увійти</Text>
                </Pressable>
                <Text style={styles.textQ}>Немає акаунту? Зареєструватися</Text>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  formWrap: {
    width: "100%",
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 30,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35.16,
    letterSpacing: 1,
    textAlign: "center",
    color: "rgba(33, 33, 33, 1)",
    marginBottom: 16,
  },
  inputWrap: {
    flexDirection: "column",
    gap: 16,
    marginBottom: 30,
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 16,

    color: "#212121",
    backgroundColor: "rgba(255, 255, 255, 1)",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "rgba(232, 232, 232, 1)",

    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 343,
    height: 50,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 1)",
  },
  toggleText: {
    paddingHorizontal: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
  },
  buttonLg: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    height: 51,
    padding: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 108, 0, 1)",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 16,
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
