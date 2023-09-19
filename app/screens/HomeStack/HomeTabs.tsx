import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TMainTabs } from '@/types/INavigation'
import Enter from '@/components/blocks/Enter'
import PostsScreen from '@/screens/HomeStack/PostsScreen'
import ProfileScreen from '@/screens/HomeStack/ProfileScreen'

const Tab = createBottomTabNavigator<TMainTabs>()

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true, headerRight: () => <Enter /> }}>
      <Tab.Screen
        name='PostsScreen'
        component={PostsScreen}
        options={{
          tabBarLabel: 'Dialogs',
          headerPressColor: 'blue'
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerPressColor: 'blue'
        }}
      />
    </Tab.Navigator>
  )
}
