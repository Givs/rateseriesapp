import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import {Button, Text} from 'react-native-elements';
 

import Header from '../components/Header'
import image from '../../assets/logout.svg'


const LogOutScreen = ({navigation}) => {
    return (
        <> 
            <Header title="Log Out"/>
            <View style={styles.container}> 
            <Text h4>SEE YOU SOON</Text>
            <Image style={styles.img} source={require('../../assets/logout2.png')} />
            <Button
                title="Sair"
                type="clear"
                onPress={() => navigation.navigate("Signin")}
            />
            </View>
        </>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    img: {
        width: '100%',
        height: 300,
    }
});

export default LogOutScreen;