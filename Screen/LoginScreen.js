import React, { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (email) => setEmail(email);
  const passwordHandler = (password) => setPassword(password);

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
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Пароль"
            style={styles.input}
          />
          <Button title={"Увійти"} style={styles.button} onPress={onLogin} />
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
  button: {
    ontFamily: "Roboto",
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
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 18.75,
    textAlign: "center",
    color: "rgba(27, 67, 113, 1)",
  },
});
