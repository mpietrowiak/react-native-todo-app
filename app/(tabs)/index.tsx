import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import hotBackground from "@/assets/hot.png";
import { s } from "../../App.style";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <ImageBackground source={hotBackground} style={s.backgroundImg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <Text>Temperature</Text>
            <Text>Input</Text>
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
