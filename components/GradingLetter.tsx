import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GradingLetter = ({letter,backgroundColor}) => {
  return (
    <View style={[styles.container, backgroundColor]}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  )
}

export default GradingLetter

const styles = StyleSheet.create({

    container:{
        height:30,
        width:30,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        margin:2,
    },

    text:{
        fontFamily:'Helvetica Neue',
        fontSize:15, 
        color:'white',
        fontWeight:"500", 
    },

})