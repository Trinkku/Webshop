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
const [desc, setDesc] = useState(0)
const [isLoading, setIsLoading] = useState(true) //koska useEffect jossa haetaan sijaintia saattaa hakea tietoa hitaasti. 

//Tämän isLoading tilamuuttujan avulla voidaan tehdä toiminnallisuus mikä antaa erillisen odotustilan
const [markers, setMarkers] = useState([ //tänne tallentuu markereita longpressillä 
{"latitude": 65.00, "longitude": 25.480, "title": 'Oulun myymälä, puh. 010 2448756'},
{"latitude": 64.20, "longitude": 24.580, "title": 'Tehtaanmyymälä, puh. 010 2448756'},
{"latitude": 60.20, "longitude": 25.06, "title": ' Helsingin myymälä, puh. 010 2448756'},
{"latitude": 60.40, "longitude": 25.15, "title": 'Keravan myymälä, puh. 010 2448756'},


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


  return (
    <View style={Styles.container}>
    <MapView style={Styles.map}   >


    {markers.map((marker, index) => (
      <Marker 
      key={index}
      coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
      title={marker.title}/>

    ))
    }
      
    </MapView>
  </View>
  );
}