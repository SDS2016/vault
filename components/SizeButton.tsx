import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const SizeButton = ({ title, onPress, backgroundColor, color}) => {

  return (
    <TouchableOpacity activeOpacity={.7} onPress={onPress}>
      <View style={[styles.actionButton, backgroundColor]} >
        <Text style= {[styles.title, color]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SizeButton

const styles = StyleSheet.create({
    title:{
        color:'white',
        fontSize:20,
        fontWeight:"600",
    },

actionButton:{
    flexDirection:'row',
    minWidth:185,
    maxWidth:185,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    padding:8,
    // margin:5,
    // marginTop:30,
    backgroundColor:'#000000',
    borderRadius:80,
    //borderWidth:10,
}


})