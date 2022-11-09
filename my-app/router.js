import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/home/PostsScreen";
import CreatePostsScreen from "./Screens/home/CreatePostsScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import ProfileScreen from "./Screens/home/ProfileScreen";
import MapScreen from "./Screens/MapScreen";

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

const authOptions = { headerShown: false };

export default useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="registration">
        <AuthStack.Screen
          options={authOptions}
          name="registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={authOptions}
          name="login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="posts" component={PostsScreen} />
      <MainStack.Screen name="create posts" component={CreatePostsScreen} />
      {/* <MainStack.Screen name="comments" component={CommentsScreen} /> */}
      <MainStack.Screen name="profile" component={ProfileScreen} />
      {/* <MainStack.Screen name="map" component={MapScreen} /> */}
    </MainStack.Navigator>
  );
};
