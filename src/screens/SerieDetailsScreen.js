import axios from 'axios';
import React,{useState, useEffect, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, Image, AirbnbRating,Icon  } from 'react-native-elements';
 
import Header from '../components/Header' 


const SerieDetailsScreen = ({navigation}) => {
   
    
    const [count, setCount] = useState(0)
    const[state, setState] = useState({
        results:[]
    })
    const id = navigation.getParam('id')
    const apiurl = `http://www.omdbapi.com/?i=${id}&apikey=2ffca112`

    
    const getseries = (id) => {
        axios(apiurl).then(({data}) => {
            let results = data
            setState(results)
        })
    }

    useEffect(() => {
        getseries(id)
    },[])

    
    
    
    return(
            <View style={styles.container}>
                <Header title="Movie Details"/>
                <View style={styles.results}>
                    <Text h4 style={styles.title}>{state.Title}</Text>
                    <Image
                        source={{ uri: state.Poster }}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text h4 style={styles.details}>Details</Text>
                    <View style={styles.dsc}>
                        <Text style={styles.plot}>{state.Plot}</Text>
                    </View>
                </View>
                <View style={styles.details2}>
                    <Text style={styles.text2}>Released: {state.Released}</Text>
                    <Text style={styles.text2}>Runtime: {state.Runtime}</Text>
                    <Text style={styles.text2}>Genre: {state.Genre}</Text>
                    <Text style={styles.text2}>Actors: {state.Actors}</Text>
                </View>
                <AirbnbRating 
                    count={5}
                    defaultRating={count}
                    onFinishRating={rating=>setCount(rating)}
                />
                <View style={styles.icon}>
                    <TouchableOpacity
                       onPress={() => navigation.navigate("PersonalRate", {id:state, rate:count})}
                    >
                        <Icon
                            name='save'
                            type='font-awesome'
                            color='#fca311'
                        />
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000000'
    },
    results: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    details2: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 30,

    },
    title: {
        color:'#fff',
        marginBottom: 30
    },
    details: {
       color:'#fff',
       marginTop: 30

    },
    dsc: {
        marginTop: 10,
        padding: 10,
        width: 350,
        height: 80,
        backgroundColor: '#fca311',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    plot: {
        color:'#14213d'
    },
    text2:{
        color: '#e5e5e5',
    },
    icon: {
        marginTop: 10,
        alignItems: 'flex-end',
        marginRight: 15
    }
});

export default SerieDetailsScreen;