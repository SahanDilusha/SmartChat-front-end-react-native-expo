import { registerRootComponent } from "expo";
import { StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect, useState } from "react";

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
            </View>
            <ScrollView style={stylesheet.scrollView1}>


            </ScrollView>
        </LinearGradient>
    );
}

registerRootComponent(Home);

const stylesheet = StyleSheet.create({
    view1: {
        flex: 1,
        paddingVertical:50,
        paddingHorizontal:25,
    },

    view2: {

    },

    view3: {
        width: 80,
        height: 80,
        backgroundColor:"yellow",
        borderRadius:40,
    },
    scrollView1: {

    },

});