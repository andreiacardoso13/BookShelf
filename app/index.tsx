import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <View style={[generalStyle.container, darkMode ? generalStyle.dark : generalStyle.light]}>
      <View>
        <Text style = {[styleTitle.container, styleTitle.text, darkMode ? styleTitle.textDark: styleTitle. textLight]}>
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



    </View>
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
    justifyContent: "flex-start", //flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined (altura)
    alignItems: "flex-start", //"flex-start""flex-end""center""stretch""baseline"
  },
  text: {
    fontSize: 30, // Tamanho da fonte
    fontWeight: "bold", // normal, bold, 100,200,300,...
    fontFamily: "Arial", // Tipo de fonte (Nem todas funcionam no Android)
    marginBottom: 20, // Espaço entre o texto e o botão
  },
  textLight: {
    color: "#804000", // Cor do texto no modo claro
  },
  textDark: {
    color: "#fff", // Cor do texto no modo escuro
  },
});


const styleText = StyleSheet.create({
  container: {
    justifyContent: "flex-start", //flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined (altura)
    alignItems: "flex-start", //"flex-start""flex-end""center""stretch""baseline"
  },
  text: {
    fontSize: 20  , // Tamanho da fonte
    fontWeight: "normal", // Negrito
    fontFamily: "Arial", // Tipo de fonte (Nem todas funcionam no Android)
    marginBottom: 20, // Espaço entre o texto e o botão
  },
  textLight: {
    color: "#804000", // Cor do texto no modo claro
  },
  textDark: {
    color: "#fff", // Cor do texto no modo escuro
  },
});