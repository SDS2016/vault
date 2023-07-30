import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import React from 'react'

const RoundActionButton = ({ title, product, color, backgroundColor}) => {

  const addProduct = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem('products');
      if (storedProducts) {
        const productList = JSON.parse(storedProducts);
        const productExistsInCart = productList.find((storedProduct) => storedProduct.id === product.id);

        if (productExistsInCart) {
          Toast.show({
            type: 'error',
            text1: 'Cart error',
            text2: 'Product already in cart',
            position	:'bottom',
          });
        }
        else{
          // check if there's already 3 products in cart
          if (productList.length >= 3) {
            Toast.show({
              type: 'error',
              text1: 'Cart error',
              text2: 'You can only have 3 products in your cart',
              position	:'bottom',
            });
            return;
          }

          productList.push(product);
          await AsyncStorage.setItem('products', JSON.stringify(productList));
          // show toast
          Toast.show({
            type: 'success',
            text1: 'Cart updated',
            text2: 'Product added to bag successfully',
            position	:'bottom',
          });
        }
      }
      else{
        let productList = [];
        productList.push(product);
        console.log(`product list: ${productList}`);
        await AsyncStorage.setItem('products', JSON.stringify(productList));

        // show toast
        Toast.show({
          type: 'success',
          text1: 'Cart updated',
          text2: 'Product added to bag successfully',
          position	:'bottom',
        });
      }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <TouchableOpacity activeOpacity={.7} onPress={addProduct}>
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