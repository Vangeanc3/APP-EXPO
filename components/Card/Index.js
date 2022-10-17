import { Text, View, Button } from 'react-native';

const Card = (props) =>{
    return(
        <View>
            <Text>{props.Titulo}</Text>
            <View>
                <Button 
                title='Tela Inicial'
                onPress={ () => {} }
                />
            </View>
        </View>
    );
}