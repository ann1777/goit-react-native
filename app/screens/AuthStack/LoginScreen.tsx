import { authActions } from '@/store/auth/authSlice'
import { useAppDispatch } from '@/store/hooks'
import React, { useState } from 'react'
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'

interface IProps {
  navigation: any
}

const initialState = {
  email: '',
  password: '',
  isPasswordFocus: false
}

export default function LoginScreen({ navigation }: IProps) {
  const dispatch = useAppDispatch()

  const [state, setState] = useState(initialState)
  const [isShowKeyboard, setIsShowKeyboard] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const emailHandler = (value: string) => {
    setState((prevState) => ({
      ...prevState,
      email: value
    }))
  }

  const passwordHandler = (value: string) => {
    setState((prevState) => ({
      ...prevState,
      password: value
    }))
  }

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const setIsPasswordFocus = (value: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isPasswordFocus: value
    }))
  }

  const handleSubmit = () => {
    dispatch(authActions.setAuthorized(true))
   
  }

  const keyboardHide = () => {
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/img/ScreenBG.png')} style={styles.background}>
        <View style={styles.loginWrap}>
          <TouchableWithoutFeedback onPress={keyboardHide}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardAvoidingContainer}
            >
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  key='email'
                  value={state.email}
                  onChangeText={emailHandler}
                  placeholder='Адреса електронної пошти'
                  style={styles.input}
                  keyboardType='email-address'
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    value={state.password}
                    onChangeText={passwordHandler}
                    placeholder='•••••••••••••••'
                    secureTextEntry={!showPassword}
                    style={styles.passwordInput}
                    onFocus={() => {
                      setIsShowKeyboard(true)
                      setIsPasswordFocus(true)
                    }}
                    onBlur={() => {
                      setIsPasswordFocus(false)
                      setIsShowKeyboard(false)
                    }}
                  />
                  <TouchableWithoutFeedback onPress={toggleShowPassword}>
                    <Text style={styles.toggleText}>{showPassword ? 'Сховати' : 'Показати'}</Text>
                  </TouchableWithoutFeedback>
                </View>
                <TouchableWithoutFeedback onPress={handleSubmit}>
                  <View style={styles.buttonRg}>
                    <Text style={styles.buttonText}>Увійти</Text>
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textQ}>
                  Немає акаунту?{' '}
                  <Text
                    style={{
                      textDecorationLine: 'underline'
                    }}
                  >
                    Зареєструватися
                  </Text>
                </Text>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  )
}

const fontFamily = Platform.OS === 'android' ? 'Roboto-Regular' : ''

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start'
  },
  loginWrap: {
    width: '100%',
    height: '60.2%',
    top: '39.8%',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  keyboardAvoidingContainer: {
    flex: 1
  },
  title: {
    fontFamily: fontFamily,
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35.16,
    letterSpacing: 1,
    textAlign: 'center',
    color: 'rgba(33, 33, 33, 1)',
    marginTop: 32,
    marginBottom: 32
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(232, 232, 232, 1)',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    // placeholderTextColor: '#BDBDBD',
    marginBottom: 16,
    paddingLeft: 16
  },
  passwordContainer: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(232, 232, 232, 1)',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    placeholderTextColor: '#BDBDBD',
    marginBottom: 43,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  passwordInput: {
    flex: 1,
    height: 50,
    width: '100%',
    fontSize: 16,
    fontFamily: fontFamily,
    fontWeight: 'normal',
    lineHeight: 18.75
  },
  toggleText: {
    textAlign: 'center',
    fontFamily: fontFamily,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    color: 'rgba(27, 67, 113, 1)'
  },
  buttonRg: {
    fontFamily: fontFamily,
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
    backgroundColor: 'rgba(255, 108, 0, 1)'
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    fontFamily: fontFamily
  },
  textQ: {
    fontFamily: fontFamily,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 18.75,
    textAlign: 'center',
    color: 'rgba(27, 67, 113, 1)'
  }
})