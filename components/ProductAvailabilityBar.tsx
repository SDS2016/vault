import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductAvailabilityBar = () => {
  return (
    <View
    style={{
        width:"50%" ,
        height: '2%',
        bottom:0,
        position:'absolute',
        borderBottomWidth: 6,
        borderRightWidth: 6,
        borderLeftWidth: 6,
        borderTopEndRadius:130,
        borderTopStartRadius:130,
        alignSelf:'center',
        borderColor: "#40ff00",
        backgroundColor:"#40ff00",
    }}
    >
      
    </View>
  )
}

export default ProductAvailabilityBar

const styles = StyleSheet.create({})