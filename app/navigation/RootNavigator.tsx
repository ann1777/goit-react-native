import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from '@/navigation/AuthStack'
import { TRootNavigator } from '@/types/INavigation'
import HomeStack from '@/navigation/HomeStack'
import { useAppSelector } from '@/store/hooks'

const Stack = createNativeStackNavigator<TRootNavigator>()

export default function RootNavigator() {
  const { isAuthorized } = useAppSelector((state) => state.auth)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthorized ? (
        <Stack.Screen name='HomeStack' component={HomeStack} />
      ) : (
        <Stack.Screen name='AuthStack' component={AuthStack} />
      )}
    </Stack.Navigator>
  )
}
