import { StyleSheet, View, Text, TextInput, Pressable, ScrollView, Alert } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect, useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { registerRootComponent } from "expo";

SplashScreen.preventAutoHideAsync();

function Signin() {

  const [getMobile, setMobile] = useState("");
  const [getPassword, setPassword] = useState("");

  const [loaded, error] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  const imagePath = require("./assets/images/main.png");
  const imagePath2 = require("./assets/images/default.png");

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <LinearGradient colors={['#b8d2fc', '#ffffff']} style={stylesheet.view1}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={stylesheet.main}
        contentContainerStyle={stylesheet.scrollContent}
      >
        <View style={stylesheet.view2}>
          <Image source={imagePath} style={stylesheet.image1} contentFit="contain" />
          <Text style={stylesheet.text6}>Smart Chat</Text>
        </View>

        <Text style={stylesheet.text1}>Sign In</Text>

        <Text style={stylesheet.text2}>Hello! Welcome to Smart Chat</Text>

        <View style={stylesheet.view3}>
         <Text style={stylesheet.text7}>SD</Text>
        </View>

        <Text style={stylesheet.text3}>Mobile</Text>
        <TextInput style={stylesheet.input1} inputMode="tel" cursorColor={"#000"} maxLength={10} onChangeText={(text) => {
          setMobile(text);
        }} />


        <Text style={stylesheet.text3}>Password</Text>
        <TextInput style={stylesheet.input1} cursorColor={"#000"} secureTextEntry={true} onChangeText={(text) => {
          setPassword(text);
        }} />

        <Pressable style={stylesheet.pressable1} onPress={async () => {

          let form = new FormData();
          form.append("mobile", getMobile);
          form.append("password", getPassword);

          let response = await fetch("http://192.168.8.131:8080/SmartChat/SignUp", {
            method: "POST",
            body: form,
          });

          if (response.ok) {
            let json = await response.json();
            if (json.success) {
              Alert.alert("Success", json.message);
            } else {
              Alert.alert("Error", json.message);
            }

          }

        }}>
          <FontAwesome style={stylesheet.text4} name="sign-in" size={24} color="black" />
          <Text style={stylesheet.text4}>Sign Up</Text>
        </Pressable>

        <Pressable style={stylesheet.pressable2} onPress={() => { }}>
          <Text style={stylesheet.text5}>Create a new account? Sign Up</Text>
        </Pressable>
      </ScrollView>
    </LinearGradient>
  );
}

registerRootComponent(Signin);

const stylesheet = StyleSheet.create({
  main: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    rowGap: 5,
    paddingHorizontal: 10,
  },
  view1: {
    justifyContent: "center",
    flex: 1,
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
  image2: {
    width: 100,
    height: 100,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 100,
  },
  view3: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  pressable3: {
    borderRadius: 100,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text7:{
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    backgroundColor:"#fff",
    padding:20,
    borderRadius:100,
  },
});
