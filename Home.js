import { registerRootComponent } from "expo";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect, useState } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

SplashScreen.preventAutoHideAsync();

function Home() {

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

    return (
        <LinearGradient colors={['#b8d2fc', '#ffffff']} style={stylesheet.view1}>

            <View style={stylesheet.view2}>
                <View style={stylesheet.view3}>

                </View>
                <View style={stylesheet.view4}>
                    <Text style={stylesheet.text1}>Name</Text>
                    <Text style={stylesheet.text2}>Mobile</Text>
                    <Text style={stylesheet.text3}>Since...</Text>
                </View>
            </View>
            <ScrollView style={stylesheet.scrollView1} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                <View style={stylesheet.view5}>
                    <View style={stylesheet.view6}>

                    </View>
                    <View style={stylesheet.view4}>
                        <Text style={stylesheet.text1}>Kamal Perera</Text>
                        <Text style={stylesheet.text4}>Hello, Sahan</Text>
                        <View style={stylesheet.view7}>
                            <Text style={stylesheet.text5}>2024,sep 10 08:50 AM</Text>
                            <FontAwesome6 name={"check"} size={20} color="black" />
                        </View>

                    </View>
                </View>

            </ScrollView>
        </LinearGradient>
    );
}

registerRootComponent(Home);

const stylesheet = StyleSheet.create({
    view1: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 25,
    },

    view2: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 20,
    },

    view3: {
        width: 80,
        height: 80,
        backgroundColor: "yellow",
        borderRadius: 40,
    },
    scrollView1: {
        marginTop: 30,
    },
    text1: {
        fontSize: 25,
        fontFamily: "Montserrat-Bold",
    },
    text2: {
        fontSize: 20,
        fontFamily: "Montserrat-Regular",
    },
    text3: {
        fontSize: 18,
        fontFamily: "Montserrat-Light",
        alignSelf: "flex-end",
    },
    view4: {
        flex: 1,
        gap: 5,
    },
    view5: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        gap: 10,
        borderColor: "red",
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    view6: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#ffffff",
        borderWidth: 4,
        borderStyle: "dotted",
        borderColor: "red",

    },
    text4: {
        fontFamily: "Montserrat-Regular",
        fontSize: 20,
    },
    text5: {
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
    },
    view7:{
        flexDirection:"row",
        columnGap:10,
        alignItems:"center",
        alignSelf: "flex-end",
    }
});