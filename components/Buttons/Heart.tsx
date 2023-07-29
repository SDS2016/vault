import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


////////////// assets import /////////////
import HeartButton from '@assets/heart-button.png';

const Heart = () => {
  return (
    <View
    style={{
        
        height:55,
        width:55,
        paddingTop:5,
        borderRadius:50,
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
                height:40,
                width:40,
                
                
            }}
            source={HeartButton}
            />
    </View>
  )
}

export default Heart

const styles = StyleSheet.create({})