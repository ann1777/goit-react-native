import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Animated, Dimensions, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from "react-native";
import ScreenBG from "../assets/img/ScreenBG.png";
import AddButtonSvg from "../assets/svg/svgAddButton.jsx";
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
    const [hidePassword, setHidePassword] = useState(true);
    const [position, setPosition] = useState(new Animated.Value(50));
    const [shift, setShift] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
        const listenerShow = Keyboard.addListener("keyboardDidShow", () => {
            setShift(true);
        });
        const listenerHide = Keyboard.addListener("keyboardDidHide", () => {
            setShift(false);
        });
        return () => {
            listenerShow.remove();
            listenerHide.remove();
        };
    }, []);
    useEffect(() => {
        Animated.timing(position, {
            toValue: shift ? 130 : 50,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [shift]);
    const handleDefaultNavigation = () => {
        navigation.navigate("LoginScreen");
    };
    const [loaded] = useFonts({
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    });
    if (!loaded) {
        return null;
    }
    const loginHandler = (value) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { login: value })));
    };
    const emailHandler = (value) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { email: value })));
    };
    const passwordHandler = (value) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { password: value })));
    };
    const toggleShowPassword = () => {
        setHidePassword(!hidePassword);
    };
    const setIsPasswordFocus = (value) => {
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { isPasswordFocus: value })));
    };
    const handleSubmit = () => {
        keyboardHide();
        setState(initialState);
    };
    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };
    return (React.createElement(TouchableWithoutFeedback, { onPress: keyboardHide },
        React.createElement(View, { style: styles.container },
            React.createElement(ImageBackground, { source: ScreenBG, style: styles.imageBg },
                React.createElement(View, { style: styles.formWrap },
                    React.createElement(KeyboardAvoidingView, { behavior: Platform.OS === "ios" ? "padding" : "height", style: styles.keyboardAvoidingContainer },
                        React.createElement(View, { style: styles.avatarWrapper },
                            React.createElement(Image, { style: styles.avatar }),
                            React.createElement(TouchableOpacity, { style: isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar },
                                React.createElement(AddButtonSvg, { style: isAvatar
                                        ? styles.btnAddAvatarSvgLoad
                                        : styles.btnAddAvatarSvg }))),
                        React.createElement(Text, { style: styles.title }, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F"),
                        React.createElement(View, { style: styles.inputsContainer },
                            React.createElement(TextInput, { key: "login", value: state.login, onChangeText: loginHandler, placeholder: "\u041B\u043E\u0433\u0456\u043D", style: styles.input }),
                            React.createElement(TextInput, { key: "email", value: state.email, onChangeText: emailHandler, placeholder: "\u0410\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438", style: styles.input, keyboardType: "email-address" }),
                            React.createElement(View, { style: styles.passwordContainer },
                                React.createElement(TextInput, { value: state.password, onChangeText: passwordHandler, placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", placeholderTextColor: "#BDBDBD", secureTextEntry: hidePassword, style: styles.passwordInput, onFocus: () => {
                                        setIsShowKeyboard(true);
                                        setIsPasswordFocus(true);
                                    }, onBlur: () => {
                                        setIsPasswordFocus(false);
                                        setIsShowKeyboard(false);
                                    } }),
                                React.createElement(TouchableOpacity, { onPress: toggleShowPassword, style: styles.toggleButton },
                                    React.createElement(Text, { style: styles.toggleText }, hidePassword ? "Сховати" : "Показати")))),
                        React.createElement(TouchableOpacity, { onPress: handleSubmit, style: styles.buttonRg },
                            React.createElement(Text, { style: styles.buttonText }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F")),
                        React.createElement(Text, { style: styles.textQ, onPress: () => navigation.navigate("LoginScreen") },
                            "\u0412\u0436\u0435 \u0454 \u0430\u043A\u0430\u0443\u043D\u0442?",
                            " ",
                            React.createElement(Text, { style: { textDecorationLine: "underline" }, onPress: () => {
                                    handleDefaultNavigation();
                                } }, "\u0423\u0432\u0456\u0439\u0442\u0438"))))))));
}
const screenSize = Dimensions.get("screen");
const styles = StyleSheet.create({
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
