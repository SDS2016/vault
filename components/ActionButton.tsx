import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActionButton = ({title}) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({

  text:{
    color:'white',
    fontSize:17,
    fontWeight:'600',

  },

  buttonContainer:{
    
      height:40,
      width:200,
      borderRadius:40,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center',


  },


})