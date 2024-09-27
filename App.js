import { Image, StyleSheet, View, Text, TextInput, Pressable, ScrollView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const imagePath = require("./assets/images/main.png");

  return (
    <ScrollView style={stylesheet.main} contentContainerStyle={stylesheet.scrollContent}>

      <LinearGradient colors={['#b8d2fc', '#ffffff']} style={stylesheet.view1} >

        <View style={stylesheet.view2}>
          <Image source={imagePath} style={stylesheet.image1} />
          <Text style={stylesheet.text6}>Smart Chat</Text>
        </View>


        <Text style={stylesheet.text1}>Create Account</Text>

        <Text style={stylesheet.text2}>Hello! Welcome to Smart Chat</Text>

        <Text style={stylesheet.text3}>Mobile</Text>
        <TextInput style={stylesheet.input1} inputMode="tel" cursorColor={"#000"} maxLength={10} />

        <Text style={stylesheet.text3}>First Name</Text>
        <TextInput style={stylesheet.input1} cursorColor={"#000"} />

        <Text style={stylesheet.text3}>Last Name</Text>
        <TextInput style={stylesheet.input1} cursorColor={"#000"} />

        <Text style={stylesheet.text3}>Password</Text>
        <TextInput style={stylesheet.input1} cursorColor={"#000"} secureTextEntry={true} />

        <Pressable style={stylesheet.pressable1} onPress={() => { }}>
          <FontAwesome style={stylesheet.text4} name="sign-in" size={24} color="black" />
          <Text style={stylesheet.text4}>Sgin Up</Text>
        </Pressable>

        <Pressable style={stylesheet.pressable2} onPress={() => { }}>
          <Text style={stylesheet.text5}>Alredy  have an account? Sgin In</Text>
        </Pressable>
      </LinearGradient>
    </ScrollView>
  );
}

const stylesheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    rowGap: 10,
  },
  view1: {
    justifyContent: "center",
    paddingHorizontal: 10,
    height:"100%",
    width:"100%",
  },
  input1: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
  },
  text1: {
    fontSize: 32,
    fontFamily: "Montserrat-Bold",
    marginVertical: 10,
    color: "#436e99",
  },
  text2: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    marginVertical: 10,
  },
  text3: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    marginVertical: 5,
    color: "#436e99",
  },
  pressable1: {
    height: 50,
    backgroundColor: "#436e99",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    columnGap: 10,
  },
  text4: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "#fff",
  },
  pressable2: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text5: {
    fontSize: 18,
    fontFamily: "Montserrat-Light",
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  image1: {
    width: 60,
    height: 60,
  },
  text6: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },
  background1: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
