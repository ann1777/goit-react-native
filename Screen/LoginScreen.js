import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loaded] = useFonts({
    "Roboto-Regular": require("../assets/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const emailHandler = (email) => setEmail(email);
  const passwordHandler = (password) => setPassword(password);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            value={email}
            onChangeText={emailHandler}
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />
            <TouchableWithoutFeedback onPress={toggleShowPassword}>
              <Text style={styles.showPasswordText}>
                {showPassword ? "Сховати" : "Показати"}
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <Button title={"Увійти"} onPress={onLogin} />
          <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 1)",
    marginBottom: 16,
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
  showPasswordText: {
    paddingHorizontal: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
  },
  button: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    height: 51,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "rgba(255, 108, 0, 1)",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
    color: "rgba(27, 67, 113, 1)",
  },
});
