import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [vogal, setVogal] = useState('Sorteio não realizado');

  const randomVogal = () => {
    let sorteio = parseInt(Math.random() * 4);

    switch (sorteio) {
      case 0:
        setVogal('A');
        break;
      case 1:
        setVogal('E');
        break;
      case 2:
        setVogal('I');
        break;
      case 3:
        setVogal('O');
        break;
      case 4:
        setVogal('U');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resposta}> {vogal} </Text>
      <TouchableOpacity style={styles.botao} onPress={() => randomVogal()}>
        <Text style={styles.texto}> Sorteio </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    padding: '5%',
    paddingRight: '10%',
    paddingLeft: '10%',
    backgroundColor: 'darkblue',
    borderRadius: '20',
    borderTopRightRadius: '00',
    borderBottomLeftRadius: '00',
    marginTop: '5%',
  },
  texto: {
    color: '#fff',
    fontSize: 16,
  },
  resposta: {
    fontSize: 20,
    fontWeight: '600',
    padding: '5%',
    borderWidth: 1,
    borderColor: 'black',
  },
});
