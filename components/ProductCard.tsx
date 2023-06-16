import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductCard() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        height:200, 
        width:150,
        borderRadius:20,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,

    },
})