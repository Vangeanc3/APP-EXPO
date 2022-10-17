import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Capa from '../../assets/capa.png'

const Menu = () => {
    return (
        <View>
            <Image source={ Capa } style={ estilos.img }/>
        </View>
    );
}

const oit = '100%';

const estilos = StyleSheet.create({
    img: {
        width: oit,
      },
})

export default Menu;