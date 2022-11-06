import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native'
import React, { useState, useEffect} from 'react'
import Styles from '../Styles'
import { COLOURS } from '../Styles'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Items } from '../Components/Data/Database'

export default function HomeScreen({navigation}) {

 

  const [products, setProducts] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

  //otetaan tiedot database.js:stä

  const getData = () => {
    let productList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      }
    }
    setProducts(productList);
  };

    const ProductCard = ({data}) => {
      return(
        <TouchableOpacity
       onPress={() => navigation.navigate('Favorites', {productID: data.id})} > 
          <View style={Styles.productCard}>
            <Image source={data.productImage}style={Styles.image}/>
            <Text styele={{fontSize: 16, fontWeight:'bold'}}>{productName}</Text>
            <Text>{data.description}</Text>
            <Text>Price: {data.ProductPrice}</Text>
          </View>
        </TouchableOpacity>
      )
    }

  return (
    <View style={Styles.homepage}>
      <StatusBar/>
      <SafeAreaView>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.homeHeading}>
        <TouchableOpacity>
         <Text style={{fontSize: 20, fontWeight: '00', color:'#000000'}}>Le Furnitures</Text>
        </TouchableOpacity>
       </View>

       <View style={Styles.homeTitle}>
        <Text style={{fontSize: 20,color:'#000000',letterSpacing:1,fontWeight: '300'}}> Handmade furnitures</Text>
       </View>

      <View style={Styles.products}>
        <Text 
        style={{fontSize: 18, 
          marginLeft:10, 
          color: COLOURS.black,
          letterSpacing:1,
        }}></Text>
       
    
      </View>
      <View>
        {
          products.map((data)=> (
            <ProductCard data={data} key={data.id}/>
            
          ))
        }
      </View>
      </ScrollView>
      </SafeAreaView>

    </View>
  )
}