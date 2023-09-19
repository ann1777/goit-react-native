import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from '@/screens/HomeStack/HomeTabs'
import CreatePostScreen from '@/screens/HomeStack/CreatePostScreen'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Tabs'>
      <Stack.Screen name='Tabs' component={HomeTabs} />
      <Stack.Screen name='CreatePostScreen' component={CreatePostScreen} />
    </Stack.Navigator>
  )
}
