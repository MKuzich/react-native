import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import MapScreen from "./Screens/MapScreen";
import Home from "./Screens/Home";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
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
