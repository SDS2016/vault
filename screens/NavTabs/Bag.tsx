import { StyleSheet, Text, View } from 'react-native'
import ActionButton from '@components/Buttons/ActionButton'
import React from 'react'

const Cart = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:160, }}>
        <Text style={styles.text}>Your bag is empty</Text>
        <Text style={styles.text2}>Choose 3 shoes to be added in your bag</Text>
        <ActionButton title={'Continue Shopping'}/>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  text:{
    color:'#b1b1b1',
    fontSize:17,
    fontWeight:'600',
   
  },

  text2:{
    color:'#b1b1b1',
    fontSize:17,
    fontWeight:'600',
    marginBottom:30,
  }

})