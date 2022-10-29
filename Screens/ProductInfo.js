import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, Dimensions, Button, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Items } from '../Components/Data/Database'
import Styles, { COLOURS } from '../Styles'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';
import MapScreen from './MapScreen'



const ProductInfo = ({route,navigation}) =>  {
const {productID} = route.params; 

const [product, setProduct] = useState({});

const width =  Dimensions.get ('window').width

    useEffect(() => {
     const unsubscribe = navigation.addListener ('focus', () => {
        getData();
     });
    return unsubscribe;

    }, [navigation]);
    
    const twoOptionAlertHandler = () => {
      //function to make two option alert
      Alert.alert(
        'Thankyou for your interest',
        //body
        'You can check this product from our stores by clicking map',
        [
          { text: 'Map', onPress: () => navigation.navigate('map') },
          {
            text: 'Cancel',
            onPress: () => console.log('No Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
        //clicking out side of alert will not cancel
      );
    };
  
    //haetaan tuote data tuotteen id:llä
    const getData = async () => {
        for  (let index = 0; index < Items.length; index++) {
            if (Items[index].id == productID) {
            await setProduct(Items[index]);
            return;
         }
    }
}
console.log(product);


const renderProduct = ({item,index}) => { //näyttää tuotteita indexin mukaan
  return (
  <View style={Styles.productCard}> 
    <Image source={item} style={{
      width:'100%',
      height:'100%',
      resizeMode: 'contain',}}/>
    </View>

  )
};

  return (
    <View>
      <ScrollView>
        <View>

          <View style={{width:'100%', flexDirection: 'row', justifyContent:'space-between', paddingTop:16, paddingLeft: 16}}>
            <TouchableOpacity>
            <Ionicons name="chevron-back-outline" style={Styles.icon}/>
    
            </TouchableOpacity>
          </View>
       <FlatList
       data={product.productImageList ? product.productImageList : null}
       horizontal
       renderItem={renderProduct}
       />
      <View style={{
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        }}>
        <Text style={Styles.productName}> {product.productName}</Text>
      </View>
      <View>
        <Text style={Styles.productDesc}>{product.description}</Text>
      </View>
      <View>
      <Button
          title="Where to find"
          onPress={twoOptionAlertHandler}
        />
      </View>
 
   
         
          </View>
      </ScrollView>
    </View>
  )
}
export default ProductInfo;