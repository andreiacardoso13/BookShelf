import { Text, View, Image, Button, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import vbsa from "@/images/vbsa.jpeg";
import maridos from "@/images/7Maridos.jpeg";

export default function Index() {
  const theme = useColorScheme(); // Obtém o tema do sistema automaticamente

  return (
    <SafeAreaView style={[generalStyle.container, theme === "dark" ? generalStyle.dark : generalStyle.light]}>

      <StatusBar 
        translucent 
        backgroundColor={theme === "dark" ? generalStyle.dark.backgroundColor : generalStyle.light.backgroundColor} 
        barStyle={theme === "dark" ? "light-content" : "dark-content"} 
      /> 

      <View style={styleTitle.container}>
        <Text style={[styleTitle.text, theme === "dark" ? styleTitle.textDark : styleTitle.textLight]}>
          My Bookshelf 📚
        </Text>
      </View>


      <View>
        <Text style={[styleText.container, styleText.text, theme === "dark" ? styleText.textDark : styleText.textLight]}>
          Bem vindo à minha aplicação, ieiii
        </Text>
      </View>



      <View style={styleImages.container}>
      {livros.map((item, index) => (
        <View key={index} style={styleImages.container}>
          <Image source={item.imagem} style={styleImages.container} />
          <Text style={[styleImages.container, styleImages.text, theme === "dark" ? styleImages.textDark : styleImages.textLight]}>{item.nome}</Text>
        </View>
      ))}
    </View>



  );
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


const styleImages = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    flex: 1,
  },
  image: {  
    resizeMode: "contain", // Evita cortes na imagem
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "serif",
    marginBottom: 20,
  },
  textLight: {
    color: "#804000", // Cor do texto no modo claro
  },
  textDark: {
    color: "#fff", // Cor do texto no modo escuro
  },
});


const livros = [
  { nome: "VBSA", imagem: vbsa }, 
  { nome: "maridos", imagem: maridos},
];
