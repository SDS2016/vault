import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTemp = ({...props}) => {

    
    const {
            placeholder,
            onChangeText,
            value,
            style,
        }= props


  return (
    <TextInput
        style={[styles.input,style]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            
            >
    </TextInput>

  )
}

export default InputTemp

const styles = StyleSheet.create({

    input:{
        fontSize:17,
        color:'black',
        marginLeft:2,
        paddingLeft:13,
        flexDirection:'row',
        minWidth:"70%",
        maxWidth:"70%",
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        margin:5,
        marginTop:10,
        backgroundColor:'white',
        borderRadius: 16,
        borderColor: "black",
        borderWidth:2,

    }



})