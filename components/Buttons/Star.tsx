import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Star = () => {
  return (
    <View
    style={{
        
        height:75,
        width:75,
        
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
                height:55,
                width:55,
                resizeMode:'contain',
                
                
            }}
            source={require('/Users/ericfreeman/vaultApp/assests/star-button.png')}
            />
    </View>
  )
}

export default Star

const styles = StyleSheet.create({})