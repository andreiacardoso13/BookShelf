import { Text, View, Image, StyleSheet, useColorScheme, FlatList } from "react-native";
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
          Bem-vindo à minha aplicação, ieiii
        </Text>
      </View>

      <FlatList
        data={livros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styleImages.itemContainer}>
            <Image source={item.imagem} style={styleImages.image} />
            <Text style={[styleImages.text, theme === "dark" ? styleImages.textDark : styleImages.textLight]}>
              {item.nome}
            </Text>
          </View>
        )}
      />
      
    </SafeAreaView>
  );
}

// Estilos gerais
const generalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  light: {
    backgroundColor: "#F5DEB3",
  },
  dark: {
    backgroundColor: "#222",
  },
});

// Estilos do título
const styleTitle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "serif",
    marginBottom: 20,
  },
  textLight: {
    color: "#804000",
  },
  textDark: {
    color: "#fff",
  },
});

// Estilos do texto
const styleText = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "serif",
    marginBottom: 20,
  },
  textLight: {
    color: "#804000",
  },
  textDark: {
    color: "#fff",
  },
});

// Estilos das imagens
const styleImages = StyleSheet.create({
  itemContainer: {
    width: "100%", // Ocupa a largura total da tela
    alignItems: "center",
    marginBottom: 20, // Espaçamento entre os livros
  },
  image: {
    width: "80%", // Ajusta a imagem para ser responsiva
    height: 350, // Altura fixa para todas as imagens
    resizeMode: "contain", // Mantém a proporção sem cortes
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  textLight: {
    color: "#804000",
  },
  textDark: {
    color: "#fff",
  },
});

// Lista de livros
const livros = [
  { nome: "VBSA", imagem: vbsa }, 
  { nome: "Maridos", imagem: maridos },
];
