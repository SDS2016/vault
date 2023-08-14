import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const OptionsComp = ({onPress,title}) => {
  return (

<TouchableOpacity onPress={onPress} activeOpacity={.5}>
    <View 
    style={{
        paddingTop:8, 
        paddingBottom:8, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        borderBottomColor:'#e4e4e4', 
        borderBottomWidth:.8,}}
        >
              <Text>{title}</Text>
    </View>
</TouchableOpacity>
  )
}

export default OptionsComp

const styles = StyleSheet.create({})