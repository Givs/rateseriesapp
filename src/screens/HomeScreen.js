import React,{useState} from 'react';
import axios from 'axios'

import {StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native'
import {Text} from 'react-native-elements'

import Header from '../components/Header'


const HomeScreen = ({navigation}) => {

    const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=2ffca112"
    const [state, setState] = useState({
        s: "Choice a category...",
        results: [],
        selected: {}
    })


    function search(){
        axios(apiurl + "&s=" + state.s).then(({data}) => {
            let results = data.Search
            
            setState(prevState => {
                return {...prevState,results: results}
            })
        })
    }

    return (
        <View style={styles.container}> 
            <Header title="Home"/> 
            <View style={styles.info}>
                <Text h4 >Hi!</Text>
                <Text h4 >Welcome to Rate Movies App</Text>
            </View>
            <Text h4 style={styles.text}>Choice a category:</Text>
            <TextInput 
                style={styles.searchbox}
                onChangeText = {text => setState(prevState => {
                    return {...prevState, s:text}
                })}
                onSubmitEditing={search}
                value={state.s}
            />
            <ScrollView style={styles.results} showsVerticalScrollIndicator={false}>
                {state.results.map(result =>(
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("SerieDetails", {id:result.imdbID })}
                        key={result.imdbID} 
                    >
                        <View style={styles.result} > 
                            <Image 
                                source={{ uri: result.Poster }}
                                style={{
                                    width: '100%',
                                    height: 300,
                                }}
                                resizeMode="cover"
                            />
                            <Text style={styles.heading}>{result.Title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },
    info: {
        marginBottom: 15,
        marginTop: 15,
        alignItems: 'flex-start'
    },
    searchbox: {
        fontSize: 15,
        fontWeight: '300',
        padding: 10,
        width: "80%",
        backgroundColor: "#fff",
        borderRadius:10,
        marginBottom: 20,
        marginTop: 10
    },
    results: {
       width: 200,
        paddingBottom: 50
    },
    result: {
        flex:1,
        width:"100%",
        marginBottom: 20   
    },
    heading: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        padding:7,
        backgroundColor: "#445872",
        textAlign: 'center'
      },
      text: {
          marginTop: 10
      }
})

export default HomeScreen;