import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import MapScreen from "./Screens/MapScreen";
import Home from "./Screens/Home";
import { useState } from "react";
import { StyleSheet, Keyboard } from "react-native";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const onSubmitHandler = (name, password) => {
    console.log(`Name: ${name}, password: ${password}`);
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const toggleSwitch = () => {
    setIsRegistered((prevState) => !prevState);
  };

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="registration">
        <MainStack.Screen name="registration" component={RegistrationScreen} />
        <MainStack.Screen name="login" component={LoginScreen} />
        <MainStack.Screen name="posts" component={PostsScreen} />
        <MainStack.Screen name="create posts" component={CreatePostsScreen} />
        <MainStack.Screen name="comments" component={CommentsScreen} />
        <MainStack.Screen name="profile" component={ProfileScreen} />
        <MainStack.Screen name="map" component={MapScreen} />
        <MainStack.Screen name="home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  switch: {
    position: "absolute",
    top: 20,
    right: 30,
    zIndex: 100,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
});
