import React, { useState } from "react";
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from "react-native";
import ScreenBG from "../assets/img/ScreenBG.png";
const initialState = {
    email: "",
    password: "",
    isPasswordFocus: false,
};
const LoginScreen = ({ onLogin }) => {
    const [state, setState] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const emailHandler = (value) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { email: value })));
    };
    const passwordHandler = (value) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { password: value })));
    };
    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const setIsPasswordFocus = (value) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { isPasswordFocus: value })));
    };
    const handleSubmit = () => {
        keyboardHide();
        setState(initialState);
        if (onLogin) {
            onLogin();
        }
    };
    const keyboardHide = () => {
        Keyboard.dismiss();
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(ImageBackground, { source: ScreenBG, style: styles.background },
            React.createElement(View, { style: styles.loginWrap },
                React.createElement(TouchableWithoutFeedback, { onPress: keyboardHide },
                    React.createElement(KeyboardAvoidingView, { behavior: Platform.OS === "ios" ? "padding" : "height", style: styles.keyboardAvoidingContainer },
                        React.createElement(Text, { style: styles.title }, "\u0423\u0432\u0456\u0439\u0442\u0438"),
                        React.createElement(View, { style: styles.inputContainer },
                            React.createElement(TextInput, { key: "email", value: state.email, onChangeText: emailHandler, placeholder: "\u0410\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438", style: styles.input, keyboardType: "email-address" }),
                            React.createElement(View, { style: styles.passwordContainer },
                                React.createElement(TextInput, { value: state.password, onChangeText: passwordHandler, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", secureTextEntry: !showPassword, style: styles.passwordInput, onFocus: () => {
                                        setIsShowKeyboard(true);
                                        setIsPasswordFocus(true);
                                    }, onBlur: () => {
                                        setIsPasswordFocus(false);
                                        setIsShowKeyboard(false);
                                    } }),
                                React.createElement(Pressable, { onPress: toggleShowPassword },
                                    React.createElement(Text, { style: styles.toggleText }, showPassword ? "Сховати" : "Показати"))),
                            React.createElement(Pressable, { onPress: handleSubmit, style: styles.buttonRg },
                                React.createElement(Text, { style: styles.buttonText }, "\u0423\u0432\u0456\u0439\u0442\u0438")),
                            React.createElement(Text, { style: styles.textQ },
                                "\u041D\u0435\u043C\u0430\u0454 \u0430\u043A\u0430\u0443\u043D\u0442\u0443?",
                                " ",
                                React.createElement(Text, { style: {
                                        textDecorationLine: "underline",
                                    } }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F")))))))));
};
const styles = StyleSheet.create({
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
        placeholderTextColor = "#BDBDBD",
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
export default LoginScreen;
