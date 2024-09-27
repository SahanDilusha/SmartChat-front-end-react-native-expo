import { StyleSheet, View } from "react-native";

export default function App() {
  return(
    <View style={stylesheet.view1}>

    </View>
  );
}

const stylesheet = StyleSheet.create({
  view1:{
    flex:1,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
  }
});