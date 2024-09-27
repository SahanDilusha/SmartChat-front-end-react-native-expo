import { Image, StyleSheet, View,Text } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    "Montserrat-Bold": "./assets/fonts/Montserrat-Bold.ttf",
    "Montserrat-Light": "./assets/fonts/Montserrat-Light.ttf",
    "Montserrat-Regular": "assets/fonts/Montserrat-Regular.ttf",
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const imagePath = require("./assets/images/main.png");

  return (
    <View style={stylesheet.view1}>
      <Image source={imagePath}/>

      <Text>Create Account</Text>

      <Text>Hello! Welcome to Smart Chat</Text>

      

    </View>
  );
}

const stylesheet = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  }
});