import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PriceLabel = ({price}) => {
  return (
    <View
    
    style={{
    flexDirection:'column',
    alignItems:'center',
    height:60,
    width:150,
    // backgroundColor:'yellow',

    }}
    >
      <Text 
        style={{
            fontFamily:'Helvetica Neue',
            fontSize:16, 
            fontWeight:"500",
        }}>Retail Price</Text>


      <Text
        style={{
            fontFamily:'Helvetica Neue',
            fontStyle:'italic',
            fontSize:36, 
            fontWeight:"900",
            // backgroundColor:'blue',
        }}
      >{price}</Text>
    </View>
  )
}

export default PriceLabel

const styles = StyleSheet.create({})