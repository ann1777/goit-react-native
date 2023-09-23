import React, {useState} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from '../firebase/config.js';
import {auth} from '../config';
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
} from 'react-native';
import backgroundImg from '../assets/ScreenBG.png';

const initialState = {
  email: '',
  password: '',
  isPasswordFocus: false,
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailHandler = value => {
    setState(prevState => ({...prevState, email: value}));
  };

  const passwordHandler = value => {
    setState(prevState => ({...prevState, password: value}));
  };

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleEmailFocus = () => {
    setEmailFocus(!emailFocus);
  };
  const handlePasswordFocus = () => {
    setPasswordFocus(!passwordFocus);
  };

  const handleSubmit = () => {
    keyboardHide();
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={styles.loginWrap}>
              <TouchableWithoutFeedback onPress={keyboardHide}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={styles.keyboardAvoidingContainer}
                  keyboardVerticalOffset={-150}>
                  <View style={styles.loginSection}>
                    <Text style={styles.title}>Увійти</Text>
                    <TextInput
                      key="email"
                      value={email}
                      onChangeText={emailHandler}
                      placeholder="Адреса електронної пошти"
                      style={styles.input}
                      keyboardType="email-address"
                      placeholderTextColor="#BDBDBD"
                      onFocus={handleEmailFocus}
                      onBlur={handleEmailFocus}
                      autoCapitalize="none"
                    />
                    <View style={styles.passwordContainer}>
                      <TextInput
                        value={state.password}
                        onChangeText={passwordHandler}
                        placeholder="••••••••••••"
                        placeholderTextColor={'#BDBDBD'}
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
                        style={styles.toggleButton}>
                        <Text style={styles.toggleText}>
                          {showPassword ? 'Сховати' : 'Показати'}
                        </Text>
                      </Pressable>
                    </View>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.buttonRg}>
                      <Text style={styles.buttonText}>Увійти</Text>
                    </TouchableOpacity>
                    <Pressable
                      onPress={() => navigation.navigate('RegistrationScreen')}>
                      <Text style={styles.textQ}>
                        Немає акаунту?{' '}
                        <Text
                          style={{
                            ...styles.textLink,
                            textDecorationLine: 'underline',
                          }}>
                          Зареєструватися
                        </Text>
                      </Text>
                    </Pressable>
                  </View>
                </KeyboardAvoidingView>
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },

  loginWrap: {
    width: '100%',
    height: '60.2%',
    top: '39.8%',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  keyboardAvoidingContainer: {
    flex: 1,
  },

  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35.16,
    letterSpacing: 1,
    textAlign: 'center',
    color: 'rgba(33, 33, 33, 1)',
    marginTop: 32,
    marginBottom: 32,
  },

  loginSection: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(232, 232, 232, 1)',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    marginBottom: 16,
    paddingLeft: 16,
  },

  passwordContainer: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(232, 232, 232, 1)',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    marginBottom: 43,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  passwordInput: {
    flex: 1,
    height: 50,
    width: '100%',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'normal',
    lineHeight: 18.75,
  },

  toggleText: {
    textAlign: 'center',

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,

    color: 'rgba(27, 67, 113, 1)',
  },

  buttonRg: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',

    alignItems: 'center',
    justifyContent: 'center',
    height: 51,
    padding: 16,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 108, 0, 1)',
  },

  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    fontFamily: 'Roboto-Regular',
  },

  textQ: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    textAlign: 'center',
    color: 'rgba(27, 67, 113, 1)',
  },
});
exports.default = (0, react_navigation_1.withNavigation)(LoginScreen);
