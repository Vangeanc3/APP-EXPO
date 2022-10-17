import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import estilo from './estilo';

const TelaPrincipal = (props) => {
    return (
        <View style={estilo.container}>
            <Text>Tela Principal</Text>
            <Button
                title='Abrir Menu'
                onPress={
                    () => { props.navigation.navigate('Tela Perfil') }
                }
            />
            <Text>
                texto
            </Text>
            <Button
                title='Abrir Menu'
                onPress={
                    () => { props.navigation.openDrawer() }}
            />
        </View>
    );
}

export default TelaPrincipal