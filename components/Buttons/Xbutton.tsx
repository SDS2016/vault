import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

////////////// assets import /////////////
import RedXButton from '@assets/red-x-button.png';

const Xbutton = () => {
  return (
    <View
    style={{
        
        height:75,
        width:75,
        // paddingTop:8,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }}
    >
         <Image
            style={{
                height:45,
                width:45,
                resizeMode:'contain',
                
                
            }}
            source={RedXButton}
            />
    </View>
  )
}

export default Xbutton

const styles = StyleSheet.create({})