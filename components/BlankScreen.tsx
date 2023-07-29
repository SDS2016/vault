import { StyleSheet, Text, View,ScrollView, SafeAreaView } from 'react-native'
import BagProductCheckout from './BagProductCheckout'
import GradingComp from './GradingComp'
import TabUnderlay from './TabUnderlay'
import LinearGradient from 'react-native-linear-gradient'
import TintColorButtonTemplate from './Buttons/TintColorButtonTemplate'
import React from 'react'



const BlankScreen = () => {
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
             <BagProductCheckout/>
             <BagProductCheckout/>
             <BagProductCheckout/>
             <BagProductCheckout/>
             <BagProductCheckout/>
             <BagProductCheckout/>
             <BagProductCheckout/>
             <BagProductCheckout/>
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
                            <Text style={styles.text}>$40</Text>
                        </View>

                        <View style={styles.textInGrey}>
                            <Text style={styles.text}>Estimated Retail Price</Text>
                            <Text style={styles.text}>$450</Text>
                        </View>

                        <View style={styles.textInGrey}>
                            <Text style={styles.textTotal}>Total</Text>
                            <Text style={styles.textTotal}>$40</Text>
                        </View>

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
        height:'28%',
        width:'100%',
        bottom:0,
        paddingTop:20,
        position:'absolute',
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