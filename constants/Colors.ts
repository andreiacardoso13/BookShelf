/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#804000', //Cor texto modo claro
    background: '#F5DEB3', //cor fundo ecrã modo claro
    tint: tintColorLight, //cor do icone selecionado
    icon: '#687076', //cor setas de seleção na pagina search
    tabIconDefault: '#FF0000', //NAO SEI AINDA
    tabIconSelected: tintColorLight, //NAO SEI AINDA
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
