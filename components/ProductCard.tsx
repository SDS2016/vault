import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductCard() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}> 

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        height:215, 
        width:150,
        borderRadius:20,
        backgroundColor:'#f2f2f2',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#7c7c7c",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,

    },

    innerContainer:{
      height:'93%', 
      width:'90%',
      borderRadius:15,
      backgroundColor:'white',

    },


})