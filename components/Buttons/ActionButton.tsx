import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const ActionButton = ({ title, onPress, backgroundColor, color}) => {

  return (
    <TouchableOpacity activeOpacity={.7} onPress={onPress}>
      <View style={[styles.actionButton, backgroundColor]} >
        <Text style= {[styles.title, color]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ActionButton

const styles = StyleSheet.create({
    title:{
        color:'white',
        fontSize:24,
        fontWeight:"600",
    },

actionButton:{
    flexDirection:'row',
    minWidth:"70%",
    maxWidth:"70%",
    alignItems:'center',
    justifyContent:'center',
    padding:9,
    margin:5,
    marginTop:30,
    backgroundColor:'#000000',
    borderRadius: 16,
    //borderWidth:10,
}


})