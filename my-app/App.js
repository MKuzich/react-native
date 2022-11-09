import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import useRoute from "./router";

const MainStack = createStackNavigator();

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const routing = useRoute(isAuth);

  const onSubmitLogin = () => setIsAuth(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
