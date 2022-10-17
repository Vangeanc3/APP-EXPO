import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


import Menu from './components/Menu/Index';
import TelaPrincipal from './components/TelaPrincipal/Index.';
import TelaPerfil from './components/TelaPerfil/Index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tabs.Navigator>
        <Tabs.Screen name='Inicio' component={ TelaPrincipal } />
        <Tabs.Screen name='`Perfil' component={ TelaPerfil }/>
      </Tabs.Navigator> */}
      {/* <Drawer.Navigator>
        <Drawer.Screen name='Tela Inicial' component={ TelaPrincipal } />
        <Drawer.Screen name='Tela Perfil' component={ TelaPerfil } />
      </Drawer.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={ TelaPrincipal }/>
        <Stack.Screen name='Tela Perfil' component={ TelaPerfil }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// npm install @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// npm install @react-navigation/bottom-tabs
// npm install @react-navigation/drawer 
// npm install @react-navigation/stack 

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  texto: {
    fontSize: 22,
  },
    imgFoto: {
      marginTop:20,
      marginBottom:20,
      width: 100,
      height: 100,
      borderRadius:50
  }
});
