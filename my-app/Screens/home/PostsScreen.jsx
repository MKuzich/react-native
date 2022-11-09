import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FadeInRight } from "react-native-reanimated";

export default function PostsScreen() {
  return (
    <View>
      <TouchableOpacity>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    top: 20,
    right: 20,
  },
});
