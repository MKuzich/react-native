import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RegistrationScreen({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 40 * 2
  );

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
          "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 40 * 2;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const onSubmitHandler = (name, password) => {
    console.log(`Name: ${name}, password: ${password}`);
    Keyboard.dismiss();
  };

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  return (
    isReady && (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../../assets/background.jpg")}
          style={styles.bg}
        >
          <View
            style={{ ...styles.container, width: dimensions }}
            onLayout={onLayoutRootView}
          >
            <Text style={styles.title}>Please, sign up!</Text>
            <KeyboardAvoidingView
              style={{ width: "100%" }}
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
                style={styles.input}
                placeholderTextColor={`#f0f8ff`}
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                placeholderTextColor={`#f0f8ff`}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => onSubmitHandler(name, password)}
              >
                <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("login")}
              >
                <Text>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.link}
                onPress={() => navigation.navigate("login")}
              >
                <Text>I already have an account</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    )
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 20,
    color: `#f0f8ff`,
    fontFamily: "Roboto-Bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: `#f0f8ff`,
    color: `#f0f8ff`,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: `rgba(75, 0, 130, 0.5)`,
    fontFamily: "Roboto-Regular",
  },
  btn: {
    paddingVertical: 8,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: `#f0f8ff`,
    backgroundColor: `#4b0082`,
    marginHorizontal: 40,
  },
  btnText: {
    color: `#f0f8ff`,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
});
