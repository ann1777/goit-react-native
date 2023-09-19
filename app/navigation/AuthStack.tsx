import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginSignUpScreen from '@/screens/AuthStack/LoginScreen'
import { TAuthStack } from '@/types/INavigation'
import LoginScreen from '@/screens/AuthStack/LoginScreen'
import RegisterScreen from '@/screens/AuthStack/Register'

const Stack = createNativeStackNavigator<TAuthStack>()

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
    </Stack.Navigator>
  )
}
