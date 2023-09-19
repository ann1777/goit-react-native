import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from '@/navigation/RootNavigator'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { StatusBar } from 'expo-status-bar'
import * as Font from 'expo-font';
import { useFonts } from 'expo-font'
import { Platform } from 'react-native'

export default function App() {
  const fontsAndroid = {
    'Roboto-Regular': require('@/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('@/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('@/assets/fonts/Roboto-Bold.ttf'),
  }
  const [fontsLoaded] = useFonts(Platform.OS === 'android' ? fontsAndroid : {});
  
  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  )
}