import { Image, StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from "react";


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
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
      <Image source={imagePath} />

      <Text style={stylesheet.text1}>Create Account</Text>

      <Text style={stylesheet.text2}>Hello! Welcome to Smart Chat</Text>

      <Text style={stylesheet.text3}>Mobile</Text>
      <TextInput style={stylesheet.input1} inputMode="tel"/>

      <Text style={stylesheet.text3}>First Name</Text>
      <TextInput style={stylesheet.input1} />

      <Text style={stylesheet.text3}>Last Name</Text>
      <TextInput style={stylesheet.input1} />

      <Text style={stylesheet.text3}>Password</Text>
      <TextInput style={stylesheet.input1} secureTextEntry={true}/>

      <Pressable style={stylesheet.pressable1}>
        <Text style={stylesheet.text4}>Sgin Up</Text>
      </Pressable>

    </View>
  );
}

const stylesheet = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10,
    rowGap: 10,
  },
  input1: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderStyle: "solid",
    paddingStart: 10,
    fontSize:18,
  },
  text1:{
    fontSize:32,
    fontFamily:"Montserrat-Bold",
  },
  text2:{
    fontSize:20,
    fontFamily:"Montserrat-Regular",
  },
  text3:{
    fontSize:16,
    fontFamily:"Montserrat-Bold",
  },
  pressable1:{
    height:50,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
  },
  text4:{
    fontSize:18,
    fontFamily:"Montserrat-Bold",
    color:"#fff",
  },
});