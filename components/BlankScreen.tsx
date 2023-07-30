import { StyleSheet, Text, View,ScrollView, SafeAreaView } from 'react-native'
import BagProductCheckout from './BagProductCheckout'
import GradingComp from './GradingComp'
import TabUnderlay from './TabUnderlay'
import LinearGradient from 'react-native-linear-gradient'
import FormatCurrency from '@utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import ActionButton from '@components/Buttons/ActionButton';
import React, {useEffect, useState} from 'react';
////////////// import API functions /////////////
import { getPaymentIntent } from '@api/StripeIntegration';
// stripe import
import { useStripe } from '@stripe/stripe-react-native';

const BlankScreen = ({navigation}) => {
    const { initPaymentSheet, presentPaymentSheet, confirmPayment } = useStripe();
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
                    position: 'bottom',
                }); 
                setProducts(newProductList);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const initializePaymentSheet = async () => {
        const { client_secret } = await getPaymentIntent();
        console.log(client_secret);
    
        const { error } = await initPaymentSheet({
          merchantDisplayName: "Vault",
          paymentIntentClientSecret: client_secret,
          // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
          //methods that complete payment after a delay, like SEPA Debit and Sofort.
          allowsDelayedPaymentMethods: true,
          defaultBillingDetails: {
            name: 'Jane Doe',
          }
        });
        if (!error) {
        //   setLoading(true);
        }
      };


      const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet();
    
        if (error) {
            console.log(`Error code: ${error.code}`, error.message);
        } else {
            console.log('Success', 'Your order is confirmed!');
        }
      };


    
    useEffect(() => {
        getProducts();
        initializePaymentSheet();
        // console.log(products);
    }, [])

  return (
    <View
    style={{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        
    }}
    >
 <LinearGradient
    
    start={{x:.5, y:.8}}
    end={{x:.5, y:0.1}}
    colors={['#ffffff00','#ffffff26','#ffffffd2', '#ffffff']}
    style={{
        width:'100%',
        height:300,
        position:'absolute',
        top:0,
        zIndex:1,


        }}
    />
    

 
     <View style={styles.checkOut}>
       
        <ScrollView showsVerticalScrollIndicator={false}>
            {
            products.length > 0 ?
                products.map((product) => (
                    <BagProductCheckout key={product.id} product={product} removeProduct={removeProduct}/>
                ))
            :
                null
            }
        </ScrollView>
     </View>


     




            
           
        <View style={styles.orderTotal}>
        <View
            style={{
                // height:'35%',
                width:'85%',
                // justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'orange',
               
            }}
            >
                        <Text 
                        
                        style={{
                            width:'100%',
                            fontSize:20,
                            fontWeight:'600',
                            fontFamily:'Helvetica Neue',
                            flexDirection:'row',

                        }}>Order Summary</Text>

                        <View style={styles.textInGrey}>
                            <Text style={styles.text}>Shipping</Text>
                            <Text style={styles.text}>free</Text>
                        </View>

                        <View style={styles.textInGrey}>
                            <Text style={styles.text}>Membership</Text>
                            <Text style={styles.text}>$40.00</Text>
                        </View>

                        <View style={styles.textInGrey}>
                            <Text style={styles.text}>Estimated Retail Price</Text>
                            <Text style={styles.text}>
                                {
                                    products.length > 0 ?(
                                        // sum total of all products
                                        FormatCurrency(products.reduce((a, b) => a + (b.default_price.unit_amount / 100), 0), products[0].default_price.currency)                                        
                                    ):null
                                }
                            </Text>
                        </View>

                        <View style={styles.textInGrey}>
                            <Text style={styles.textTotal}>Total</Text>
                            <Text style={styles.textTotal}>$40.00</Text>
                        </View>
                        <ActionButton title={'Subscribe'} onPress={openPaymentSheet}/>


                </View>
             </View>

    </View>
   
  )
}

export default BlankScreen

const styles = StyleSheet.create({

    checkOut:{
        flex:.77,
        width:'100%',
        // marginTop:'25%',
        // backgroundColor:'yellow',
        padding:'2%',
        // justifyContent:'center',
        alignItems:'center',


    },

    orderTotal:{
        height:'35%',
        width:'100%',
        bottom:0,
        paddingTop:20,
        position:'absolute',
        paddingBottom:20,
        // justifyContent:'center',
        backgroundColor:'white',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        
        
        

    },


    text:{
        fontFamily:'Helvetica Neue',
        fontSize:15,
        color:'#9e9e9e'
        // fontWeight:"500", 
    },

    textInGrey:{
        width:'100%',
        fontFamily:'Helvetica Neue',
        flexDirection:'row',
        justifyContent:'space-between',
        // fontSize:35,
        marginTop:10,
        color:'#b6b6b6',
        backgroundColor:'white',
        // fontWeight:"500", 
    },

    textTotal:{
        fontFamily:'Helvetica Neue',
        fontSize:25,
        fontWeight:"500", 
    },

   
})