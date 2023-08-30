import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ActionButton from '@components/Buttons/ActionButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import BagProductCheckout from '@components/BagProductCheckout';

import React, {useEffect, useState} from 'react';

import ModalSheetTemp from '@components/ModalSheetTemp';






const Cart = ({navigation}) => {

  
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem('products');
      if (storedProducts) {
        const productList = JSON.parse(storedProducts);
        setProducts(productList);
      }
    } catch (error) {
      console.log(error);
    }
  }


  const removeProduct = async (productToRemove) => {
      try {
          const storedProducts = await AsyncStorage.getItem('products');
          if (storedProducts) {
              const productList = JSON.parse(storedProducts);
              const newProductList = productList.filter((product) => product.id !== productToRemove.id);
              await AsyncStorage.setItem('products', JSON.stringify(newProductList));
              Toast.show({
                  type: 'success',
                  text1: 'Cart updated',
                  text2: 'Product removed from cart successfully',
                  position: 'top',
              }); 
              setProducts(newProductList);
          }
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
    getProducts();
    // console.log(products);
  }, [products])
  


  return (
    <View 
    
      style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop:40,
        backgroundColor:'white', }}>


      <View 
      
        style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom:160, }}>


        {
          products.length <= 0 ?(
            <>
              <Text style={styles.text}>Your bag is empty</Text>
              <Text style={styles.text2}>Choose 3 shoes to be added in your bag</Text>
              <ActionButton title={'Continue Shopping'} onPress={()=>navigation.navigate('Home')}/>
            </>
          )
          :
          products.map((product) => (
            <BagProductCheckout key={product.id} product={product} removeProduct={removeProduct}/>
          ))
        }

        {
          products.length >= 3? (
            <ActionButton title={'Checkout'} onPress={()=>navigation.navigate('Blank Screen')}/>
          ):null
        }


       
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