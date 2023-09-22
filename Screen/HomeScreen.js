import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
// import ProfileScreen from "./ProfileScreen";
// import CreatePostScreen from "./CreatePostScreen";
// import PostsScreen from "./PostsScreen";
import PostNavigation from "../Components/Navigation";

const Home = createStackNavigator();

export default function HomeScreen() {
  return (
    <Home.Navigator initialRouteName="PostsBar">
      <Home.Screen
        name="PostsBar"
        component={PostNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Home.Navigator>
  );
}

const styles = StyleSheet.create({});
