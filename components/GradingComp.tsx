import { StyleSheet, Text, View } from 'react-native'
import GradingLetter from './GradingLetter'
import React from 'react'

const GradingComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grade</Text>
      <View
        style={{
          flexDirection:'row',
          
          
        }}
      
      >

        <GradingLetter 
        letter={'A'}
        backgroundColor={{backgroundColor:'#000000'}}
        />

        <GradingLetter 
        letter={'B'}
        backgroundColor={{backgroundColor:'#c6c6c6'}}
        />

        <GradingLetter 
        letter={'C'}
        backgroundColor={{backgroundColor:'#c6c6c6'}}
        />      

      </View>
    </View>
  )
}

export default GradingComp

const styles = StyleSheet.create({

  container:{
    flexDirection:'column',
    alignItems:'center',
    height:60,
    width:150,
    justifyContent:'space-between',
    // backgroundColor:'green',
  },

  text:{
    fontFamily:'Helvetica Neue',
    fontSize:18, 
    fontWeight:"500", 

  },

})