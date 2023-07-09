import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PriceLabel = ({price}) => {
  return (
    <View
    
    style={{
    flexDirection:'column',
    alignItems:'center',
    height:50,
    width:150,

    }}
    >
      <Text 
        style={{
            fontFamily:'Helvetica Neue',
            fontSize:16, 
            fontWeight:"400",
        }}>Retail Price</Text>


      <Text
        style={{
            fontFamily:'Helvetica Neue',
            fontStyle:'italic',
            fontSize:36, 
            fontWeight:"900",
        }}
      >{price}</Text>
    </View>
  )
}

export default PriceLabel

const styles = StyleSheet.create({})