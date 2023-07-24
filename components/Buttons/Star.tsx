import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

////////////// assets import /////////////
import StarButton from '@assets/star-button.png';

const Star = () => {
  return (
    <View
    style={{
        
        height:63,
        width:63,
        
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
                height:45,
                width:45,
                resizeMode:'contain',
                
                
            }}
            source={StarButton}
            />
    </View>
  )
}

export default Star

const styles = StyleSheet.create({})