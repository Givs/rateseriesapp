import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import firebase from '../firebase/Firebase'


const SigninScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            navigation.navigate("Home")
            console.log("ok")
        }).catch((e) => {
            console.log(e)
        })
    }


    return (
        <View style={styles.container}>
            <Text h3 style={styles.header}>Entre no Rate Series App</Text> 
            <Input 
                label="Seu E-mail"
                placeholder="exemplo@exemplo.com"
                leftIcon = {
                    <Icon name="envelope-square" size={24} color="black"/>
                }
                value={email}
                onChangeText={setEmail}
                autoCapitalize = "none"
                autoCorrect={false}
            />
            <Input 
                label="Sua Senha"
                placeholder="******"
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
                title="Entrar"
                type="clear"
                onPress={SignIn}
            />
            <Button 
                title="Ainda não tem uma conta?"
                type="clear"
                onPress={() => navigation.navigate("Signup")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        marginBottom: 80
    }
})

export default SigninScreen;