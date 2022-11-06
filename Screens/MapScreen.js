import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import Styles from '../Styles';
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const STORAGE_KEY= '@markers_Key' //tietokannan nimi / avain

export default function MapScreen({navigation}) {

const [latitude, setLatitude] = useState(0)
const [longitude, setLongitude] = useState(0)
const [isLoading, setIsLoading] = useState(true) //koska useEffect jossa haetaan sijaintia saattaa hakea tietoa hitaasti. 

//Tämän isLoading tilamuuttujan avulla voidaan tehdä toiminnallisuus mikä antaa erillisen odotustilan
const [markers, setMarkers] = useState([ //tänne tallentuu markereita longpressillä 
{"latitude": 65.00, "longitude": 25.480, "title": 'testi'},
{"latitude": 64.20, "longitude": 24.580, "title": 'testi'},
{"latitude": 60.20, "longitude": 25.06, "title": 'testi'},
{"latitude": 60.40, "longitude": 25.15, "title": 'testi'},


])

useEffect(() => {
  (async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    
    if (status!== 'granted') {
      alert("location failed.");
      return;
      }
  })
}, [])

//Tallennetaan JSON tietoja koneen muistiin 
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value) //Taulukko muutetaan json kieleksi
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue) //jsonValue on markers taulukko(määr. returnin alla). siirretään  tietokannan (storage_key) avaimen alle.
  } catch (error) {
    console.log(error)
    // saving error
  }
}
//Luetaan tallennettu data
const getData = async() => {
  try{
    return AsyncStorage.getItem(STORAGE_KEY) //haetaan avaimella
    .then (response => JSON.parse(response)) //muunnetaan vastaus json takasin taulukoksi/objekteiksi
    .then (data => {
      if (data===null) data = [] //jos data on tyhjä eli null, silloin data on tyhjä taulukko

      setMarkers(data) //jos on dataa niin laitetaan se setMarkesiin
    }).catch (e =>{
      console.log(e)
    })
  } catch (error){
    console.log(error)
  }
}



  return (
    <View style={Styles.container}>
    <MapView style={Styles.map} 
    onLongPress={(e)=> {
      const newMarker ={"lat" : e.nativeEvent.coordinate.latitude, "lng": e.nativeEvent.coordinate.longitude}
      const updatedMarkers= [...markers, newMarker]
      setMarkers(updatedMarkers)
      storeData(updatedMarkers)
    
    }}
    >


    {markers.map((marker, index) => (
      <Marker 
      key={index}
      coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
    
      
  
      />

    ))
    }
      
    </MapView>
  </View>
  );
}