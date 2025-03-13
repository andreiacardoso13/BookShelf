import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <SafeAreaView style={[generalStyle.container, darkMode ? generalStyle.dark : generalStyle.light]}>
      <StatusBar translucent backgroundColor={darkMode ? generalStyle.dark.backgroundColor : generalStyle.light.backgroundColor} barStyle={darkMode ? "light-content" : "dark-content"} /> 
      <View style = {[styleTitle.container]}>
        <Text style = {[styleTitle.text, darkMode ? styleTitle.textDark: styleTitle. textLight]}>
          My Bookshelf 📚
        </Text>
      </View>
      <View>
        <Text style = {[styleText.container, styleText.text, darkMode ? styleText.textDark: styleText. textLight]}>
          Isto é um exemplo de texto
        </Text>
      </View>




      <View style = {{justifyContent: "flex-end", alignItems: "center"}}>
        <Button 
         title="Alternar Tema"
         onPress={() => setDarkMode(!darkMode)}
         color={darkMode ? "#bbb" : "#000"}
         />
      </View>



    </SafeAreaView>
  );
}


const generalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  light: {
    backgroundColor: "#F5DEB3", // Fundo claro
  },
  dark: {
    backgroundColor: "#222", // Fundo escuro
  },
})




const styleTitle = StyleSheet.create({
  container: {
    justifyContent: "center", //flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined (altura)
    alignItems: "center", //"flex-start""flex-end""center""stretch""baseline"
  },
  text: {
    fontSize: 30, // Tamanho da fonte
    fontWeight: "bold", // normal, bold, 100,200,300,...
    fontFamily: "serif", // Tipo de fonte (Nem todas funcionam no Android)
    marginBottom: 20, // Espaço entre o texto e o botão
  },
  textLight: {
    color: "#804000", // Cor do texto no modo claro
  },
  textDark: {
    color: "#fff", // Cor do texto no modo escuro
  },
  light: {
    backgroundColor: "#F5DEB3", // Fundo claro
  },
  dark: {
    backgroundColor: "#222", // Fundo escuro
  },
});


const styleText = StyleSheet.create({
  container: {
    justifyContent: "center", //flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined (altura)
    alignItems: "center", //"flex-start""flex-end""center""stretch""baseline"
  },
  text: {
    fontSize: 20  , // Tamanho da fonte
    fontWeight: "normal", // Negrito
    fontFamily: "serif", // Tipo de fonte (Nem todas funcionam no Android)
    marginBottom: 20, // Espaço entre o texto e o botão
  },
  textLight: {
    color: "#804000", // Cor do texto no modo claro
  },
  textDark: {
    color: "#fff", // Cor do texto no modo escuro
  },
});