import RegistrationScreen from "./Screens/RegistrationScreen";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Switch,
} from "react-native";

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={styles.bg}
      >
        <Switch
          onValueChange={toggleSwitch}
          value={isRegistered}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isRegistered ? "#f5dd4b" : "#f4f3f4"}
        />
        {isRegistered ? (
          <LoginScreen onSubmitHandler={onSubmitHandler} />
        ) : (
          <RegistrationScreen onSubmitHandler={onSubmitHandler} />
        )}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
});
