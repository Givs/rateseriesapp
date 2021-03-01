import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header(props){
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: 400,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14213d'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize:20,
        color:'#fff',
        letterSpacing:1,
        marginTop: 30,
    }
})