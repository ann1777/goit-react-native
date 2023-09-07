import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (login) => setLogin(login);
  const emailHandler = (email) => setEmail(email);
  const passwordHandler = (password) => setPassword(password);

  const onLogin = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingContainer}
        >
          <ImageBackground
            source={require("../assets/ScreenBG.png")}
            style={styles.image}
          >
            <View style={styles.formWrap}>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                value={login}
                onChangeText={loginHandler}
                placeholder="Логін"
                style={styles.input}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Адреса електронної пошти"
                style={styles.input}
                keyboardType="email-address"
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
              />
              <Button
                title={"Зареєстуватися"}
                onPress={onLogin}
                style={styles.button}
              />
              <Text style={styles.text}>Вже є акаунт? Увійти</Text>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
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
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "rgba(189, 189, 189, 1)",
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
  button: {
    height: 51,
    borderRadius: 10,
    backgroundColor: "rgba(255, 108, 0, 1)",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(27, 67, 113, 1)",
  },
});
