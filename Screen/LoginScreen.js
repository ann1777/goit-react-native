"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_font_2 = require("expo-font");
var react_2 = require("react");
var react_native_2 = require("react-native");
var ScreenBG_png_1 = require("../assets/img/ScreenBG.png");
var initialState = {
    email: "",
    password: "",
    isPasswordFocus: false,
};
var LoginScreen = function (_a) {
    var onLogin = _a.onLogin;
    var _b = (0, react_2.useState)(initialState), state = _b[0], setState = _b[1];
    var _c = (0, react_2.useState)(false), isShowKeyboard = _c[0], setIsShowKeyboard = _c[1];
    var _d = (0, react_2.useState)(false), showPassword = _d[0], setShowPassword = _d[1];
    var loaded = (0, expo_font_2.useFonts)({
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    })[0];
    if (!loaded) {
        return null;
    }
    var emailHandler = function (value) {
        setState(function (prevState) { return (__assign(__assign({}, prevState), { email: value })); });
    };
    var passwordHandler = function (value) {
        setState(function (prevState) { return (__assign(__assign({}, prevState), { password: value })); });
    };
    var toggleShowPassword = function () {
        setShowPassword(function (prevShowPassword) { return !prevShowPassword; });
    };
    var setIsPasswordFocus = function (value) {
        setState(function (prevState) { return (__assign(__assign({}, prevState), { isPasswordFocus: value })); });
    };
    var handleSubmit = function () {
        keyboardHide();
        setState(initialState);
        if (onLogin) {
            onLogin();
        }
    };
    var keyboardHide = function () {
        setIsShowKeyboard(false);
        react_native_2.Keyboard.dismiss();
    };
    return (react_2.default.createElement(react_native_2.View, { style: styles.container },
        react_2.default.createElement(react_native_2.ImageBackground, { source: ScreenBG_png_1.default, style: styles.background },
            react_2.default.createElement(react_native_2.View, { style: styles.loginWrap },
                react_2.default.createElement(react_native_2.TouchableWithoutFeedback, { onPress: keyboardHide },
                    react_2.default.createElement(react_native_2.KeyboardAvoidingView, { behavior: react_native_2.Platform.OS === "ios" ? "padding" : "height", style: styles.keyboardAvoidingContainer },
                        react_2.default.createElement(react_native_2.Text, { style: styles.title }, "\u0423\u0432\u0456\u0439\u0442\u0438"),
                        react_2.default.createElement(react_native_2.View, { style: styles.inputContainer },
                            react_2.default.createElement(react_native_2.TextInput, { key: "email", value: state.email, onChangeText: emailHandler, placeholder: "\u0410\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438", style: __assign(__assign({}, styles.input), { placeholderTextColor: "#BDBDBD" }), keyboardType: "email-address" }),
                            react_2.default.createElement(react_native_2.View, { style: styles.passwordContainer },
                                react_2.default.createElement(react_native_2.TextInput, { value: state.password, onChangeText: passwordHandler, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", placeholderTextColor: "#BDBDBD", secureTextEntry: !showPassword, style: styles.passwordInput, onFocus: function () {
                                        setIsShowKeyboard(true);
                                        setIsPasswordFocus(true);
                                    }, onBlur: function () {
                                        setIsPasswordFocus(false);
                                        setIsShowKeyboard(false);
                                    } }),
                                react_2.default.createElement(react_native_2.Pressable, { onPress: toggleShowPassword },
                                    react_2.default.createElement(react_native_2.Text, { style: styles.toggleText }, showPassword ? "Сховати" : "Показати"))),
                            react_2.default.createElement(react_native_2.Pressable, { onPress: handleSubmit, style: styles.buttonRg },
                                react_2.default.createElement(react_native_2.Text, { style: styles.buttonText }, "\u0423\u0432\u0456\u0439\u0442\u0438")),
                            react_2.default.createElement(react_native_2.Text, { style: styles.textQ },
                                "\u041D\u0435\u043C\u0430\u0454 \u0430\u043A\u0430\u0443\u043D\u0442\u0443?",
                                " ",
                                react_2.default.createElement(react_native_2.Text, { style: {
                                        textDecorationLine: "underline",
                                    } }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F")))))))));
};
var styles = react_native_2.StyleSheet.create({
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
        fontFamily: "Roboto-Regular",
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
        marginBottom: 16,
        paddingLeft: 16,
    },
    passwordContainer: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "rgba(232, 232, 232, 1)",
        backgroundColor: "rgba(246, 246, 246, 1)",
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
        fontFamily: "Roboto-Regular",
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
exports.default = LoginScreen;
