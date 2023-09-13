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
var react_2 = require("react");
var react_native_2 = require("react-native");
var expo_font_2 = require("expo-font");
var ScreenBG_png_1 = require("../assets/img/ScreenBG.png");
var svgAddButton_jsx_1 = require("../assets/svg/svgAddButton.jsx");
var initialState = {
    login: "",
    email: "",
    password: "",
    isPasswordFocus: false,
};
function RegistrationScreen() {
    var _a = (0, react_2.useState)(initialState), state = _a[0], setState = _a[1];
    var _b = (0, react_2.useState)(false), isAvatar = _b[0], setAvatar = _b[1];
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
    var loginHandler = function (value) {
        setState(function (prevState) { return (__assign(__assign({}, prevState), { login: value })); });
    };
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
    };
    var keyboardHide = function () {
        setIsShowKeyboard(false);
        react_native_2.Keyboard.dismiss();
    };
    return (react_2.default.createElement(react_native_2.TouchableWithoutFeedback, { onPress: keyboardHide },
        react_2.default.createElement(react_native_2.View, { style: styles.container },
            react_2.default.createElement(react_native_2.ImageBackground, { source: ScreenBG_png_1.default, style: styles.imageBg },
                react_2.default.createElement(react_native_2.View, { style: styles.formWrap },
                    react_2.default.createElement(react_native_2.KeyboardAvoidingView, { behavior: react_native_2.Platform.OS === "ios" ? "padding" : "height", style: styles.keyboardAvoidingContainer },
                        react_2.default.createElement(react_native_2.View, { style: styles.avatarWrapper },
                            react_2.default.createElement(react_native_2.Image, { style: styles.avatar }),
                            react_2.default.createElement(react_native_2.TouchableOpacity, { style: isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar },
                                react_2.default.createElement(svgAddButton_jsx_1.default, { style: isAvatar
                                        ? styles.btnAddAvatarSvgLoad
                                        : styles.btnAddAvatarSvg }))),
                        react_2.default.createElement(react_native_2.Text, { style: styles.title }, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F"),
                        react_2.default.createElement(react_native_2.TextInput, { key: "login", value: state.login, onChangeText: loginHandler, placeholder: "\u041B\u043E\u0433\u0456\u043D", style: styles.input }),
                        react_2.default.createElement(react_native_2.TextInput, { key: "email", value: state.email, onChangeText: emailHandler, placeholder: "\u0410\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438", style: styles.input, keyboardType: "email-address" }),
                        react_2.default.createElement(react_native_2.View, { style: styles.passwordContainer },
                            react_2.default.createElement(react_native_2.TextInput, { value: state.password, onChangeText: passwordHandler, placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", placeholderTextColor: "#BDBDBD", secureTextEntry: !showPassword, style: styles.passwordInput, onFocus: function () {
                                    setIsShowKeyboard(true);
                                    setIsPasswordFocus(true);
                                }, onBlur: function () {
                                    setIsPasswordFocus(false);
                                    setIsShowKeyboard(false);
                                } }),
                            react_2.default.createElement(react_native_2.Pressable, { onPress: toggleShowPassword, style: styles.toggleButton },
                                react_2.default.createElement(react_native_2.Text, { style: styles.toggleText }, showPassword ? "Сховати" : "Показати"))),
                        !isShowKeyboard && (react_2.default.createElement(react_native_2.View, null,
                            react_2.default.createElement(react_native_2.Pressable, { onPress: handleSubmit, style: styles.buttonRg },
                                react_2.default.createElement(react_native_2.Text, { style: styles.buttonText }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F")),
                            react_2.default.createElement(react_native_2.Text, { style: styles.textQ }, "\u0412\u0436\u0435 \u0454 \u0430\u043A\u0430\u0443\u043D\u0442? \u0423\u0432\u0456\u0439\u0442\u0438")))))))));
}
exports.default = RegistrationScreen;
var styles = react_native_2.StyleSheet.create({
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
