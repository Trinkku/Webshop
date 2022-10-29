import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';



export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
  width: Dimensions.get ('window').width
}; 

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 20,
      
      },
      scrollView: {
        width: '100%',
        marginTop: 40,
      },
      form:{
        marginLeft: 10,

      },
      heading:{
        color: 'pink',
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 10,

      },
      map:{
        width: Dimensions.get ('window').width,
        height: Dimensions.get ('window').height - Constants.statusBarHeight
      },
    homepage:{
      width:'100%',
      height: '100%',
      backgroundColor: '#ffffff'
    },
    homeHeading:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    },
    homeTitle:{
      marginBottom:10,
      padding:16,
      letterSpacing:1,

    },
   icon:{
    paddingTop:25,
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding:12,
    borderRadius:12,
    fontWeight: '300',
   },
   products:{
    padding: 16,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    fontSize: 12,
    color:COLOURS.black
   },
   image:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
   },
   productCard:{
    width: Dimensions.get ('window').width,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center'
   },
   productName:{
    paddingTop:10,
    fontSize:24,
    fontWeight: '600',
    letterSpacing: 1,
    marginVertical: 4,
    color: COLOURS.black,
    maxWidth: '84%',
    marginLeft:20
   },
   productDesc:{
    ontSize: 12,
   color: COLOURS.black,
    fontWeight: '400',
   letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxWidth: '80%',
    marginBottom: 18,
    marginLeft:20
   }
})