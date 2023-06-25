import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


////////////// assets import /////////////
import BackArrowButton from '@assets/black-arrow-button.png';

const BackButton = () => {
  return (
    <View
    style={{
        
        height:65,
        width:65,
        // paddingTop:8,
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
                height:48,
                width:48,
                resizeMode:'contain',
                
                
            }}
            source={BackArrowButton}
            />
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({})