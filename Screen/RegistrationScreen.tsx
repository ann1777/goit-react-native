import { NavigationProp } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"; // Import ScrollView here
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import { RootStackParamList } from "./Navigation";

interface RegistrationScreenProps {
  onRegister: () => void;
  navigation: NavigationProp<RootStackParamList, "LoginScreen">;
}

const initialState = {
  login: "",
  email: "",
  password: "",
  isPasswordFocus: false,
};
const IconAdd = ({
  width,
  height,
  fill,
}: {
  width: number;
  height: number;
  fill: string;
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      fill={fill}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-9h2V7h2v4h4v2h-4v4h-2v-4H7z"
    />
  </Svg>
);

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  onRegister,
  navigation,
}) => {
  const [state, setState] = useState(initialState);
  const [isAvatar, setAvatar] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [position, setPosition] = useState(new Animated.Value(50));
  const [shift, setShift] = useState(false);

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
    setHidePassword(!hidePassword);
  };

  const setIsPasswordFocus = (value: boolean) => {
    setState((prevState) => ({ ...prevState, isPasswordFocus: value }));
  };

  const handleSubmit = () => {
    keyboardHide();
    const { login, email, password } = state;

    if (!login || !email || !password) {
      console.error("Please fill in all required fields!");
      return;
    }
    console.log("Submitting form data:", { login, email, password });
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={ScreenBG} style={styles.imageBg}>
          <View style={styles.formWrap}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : undefined}
              style={styles.keyboardAvoidingContainer}
            >
              <View style={styles.avatarWrapper}>
                <Image style={styles.avatar} />
                <TouchableOpacity
                  style={
                    isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar
                  }
                >
                  <IconAdd width={25} height={25} fill="#ff6c00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.inputsContainer}>
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
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={hidePassword}
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
                  <TouchableOpacity
                    onPress={toggleShowPassword}
                    style={styles.toggleButton}
                  >
                    <Text style={styles.toggleText}>
                      {hidePassword ? "Сховати" : "Показати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={handleSubmit} style={styles.buttonRg}>
                <Text style={styles.buttonText}>Зареєстуватися</Text>
              </TouchableOpacity>
              <Text
                style={styles.textQ}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                Вже є акаунт?{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    handleDefaultNavigation();
                  }}
                >
                  Увійти
                </Text>
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;

const screenSize = Dimensions.get("window");

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
  avatarThumb: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  title: {
    fontFamily: "Roboro-Medium",
    fontSize: 30,
    color: "#212121",
    marginBottom: 33,
  },
  inputsContainer: { gap: 16, width: "100%", alignItems: "center" },
  input: {
    padding: 15,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    width: 343,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboro-Regular",
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  inputPasswordShower: {
    fontSize: 16,
    textAlign: "right",
    fontFamily: "Roboro-Regular",
    color: "#1B4371",
    position: "absolute",
    bottom: 30,
    left: 70,
  },
  scrollViewContainer: {
    minHeight: screenSize.height,
    justifyContent: "flex-end",
  },
  formWrapper: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    width: 343,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: "Roboro-Regular",
    fontSize: 16,
    color: "#fff",
  },
  linkText: {
    fontFamily: "Roboro-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
