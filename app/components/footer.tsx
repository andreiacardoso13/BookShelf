import { Text, View, Image, StyleSheet, useColorScheme, FlatList } from "react-native";


export default function Footer() {
  const theme = useColorScheme(); // Obtém o tema do sistema automaticamente

  return(
    <View style={[generalStyle.container, theme === "dark" ? generalStyle.dark : generalStyle.light]}>
      <Text style={[styleText.text, theme === "dark" ? styleText.textDark : styleText.textLight]}>batata</Text>
      <Text style={[styleText.text, theme === "dark" ? styleText.textDark : styleText.textLight]}>batata</Text>
    </View>
  )
}


const generalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  light: {
    backgroundColor: "#edc577",
  },
  dark: {
    backgroundColor: "#383838",
  },
});


const styleText = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "serif",
  //  marginBottom: 20,
  },
  textLight: {
    color: "#804000",
  },
  textDark: {
    color: "#fff",
  },
});