import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import firebase from '../firebase/Firebase'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(() => {
            navigation.navigate("Home")
            console.log("ok")
        }).catch((e) => {
            console.log(e)
        })
    }


    return (
        <View style={styles.container}>
            <Text h3 style={styles.header}>Inscreva-se no Rate Series App</Text>
            <Input 
                style={styles.input}
                label="Seu E-mail"
                placeholder="exemplo@exemplo.com"
                leftIcon = {
                    <Icon name="envelope-square" size={24} color="black"/>
                }
                autoCapitalize = "none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
            <Input 
                label="Sua Senha"
                placeholder="*******"
                leftIcon = {
                    <Icon name="lock" size={24} color="black"/>
                }
                secureTextEntry
                autoCapitalize = "none"
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
            />
            <Button 
                style={styles.button1}
                title="Entrar"
                type="clear"
                onPress={SignUp}
            />
            <Button 
                style={styles.button2}
                title="Já tem uma conta?"
                type="clear"
                onPress={() => navigation.navigate("Signin")}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginBottom: 80,
    },
    button2: {
        marginTop:30
    },
   
});

export default SignupScreen;