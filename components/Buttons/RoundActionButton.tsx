import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const RoundActionButton = ({ title, onPress, backgroundColor, color}) => {
  return (
    <TouchableOpacity activeOpacity={.7} onPress={onPress}>
    <View style={[styles.actionButton, backgroundColor]} >
      <Text style= {[styles.title, color]}>{title}</Text>
    </View>
</TouchableOpacity>
  )
}

export default RoundActionButton

const styles = StyleSheet.create({
    title:{
        color:'black',
        fontSize:20,
        fontWeight:"500",
    },

actionButton:{
    flexDirection:'row',
    minWidth:"100%",
    maxWidth:"100%",
    alignItems:'center',
    justifyContent:'center',
    padding:7,
    // margin:5,
    marginTop:30,
    backgroundColor:'#ffffff',
    borderRadius: 50,
    borderColor:'black',
    borderWidth:3,
    //borderWidth:10,
}


})