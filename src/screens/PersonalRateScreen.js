import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Image, AirbnbRating,Icon  } from 'react-native-elements';

import Header from '../components/Header'


const PersonalRateScreen = ({navigation}) => {
        
    const state = navigation.getParam('id')
    const rate = navigation.getParam('rate')

    console.log(rate)

    return (
        <> 
            <View style={styles.container}> 
                <Header title="Personal Rates"/>
                <View style={styles.result}>
                    <Text h4 style={styles.title}>{state.Title}</Text>
                    <Image
                        source={{ uri: state.Poster }}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text h4 style={styles.title2}>Your Rate:</Text>
                </View>
                <AirbnbRating 
                    readonly
                    count={5}
                    defaultRating={rate}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
    },
    result: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    title: {
        color:'#fff',
        marginBottom: 30 
    },
    title2: {
        color:'#fff',
        marginTop: 30
    }
});

export default PersonalRateScreen;