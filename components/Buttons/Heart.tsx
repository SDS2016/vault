import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Heart = () => {
  return (
    <View
    style={{
        
        height:65,
        width:65,
        paddingTop:8,
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
                height:50,
                width:50,
                
                
            }}
            source={require('/Users/ericfreeman/vaultApp/assests/heart-button.png')}
            />
    </View>
  )
}

export default Heart

const styles = StyleSheet.create({})