import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const BagProductCheckout = () => {


  return (

    <View 
    style={{
        height:130,
        width:'100%',
        borderRadius:20,
        backgroundColor:'#d1d1d1',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    }}>
        <View
        style={styles.innerContainer}
        >


   {/* //////// inside the inner container product image and details //////// */}

            <View
                style={{
                    height:'100%',
                    width:'35%',
                    justifyContent:'center',
                    alignItems:'center',
                    // backgroundColor:'blue',
                }}
                >
                    <Image
                    style={{
                        height:'100%',
                        width:'100%',
                        resizeMode:'contain',
                        // backgroundColor:'yellow',
                    }}
                    source={{uri:'https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Jordan-PNG-Pic.png'}}
                    />
                </View>

            <View
            style={{
                height:'100%',
                width:'65%%',
                padding:10,
                // justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'green',
                flexDirection:'column',

            }}
            >
            
                <Text style={{  fontFamily:'Helvetica Neue',fontSize:11, fontWeight:"500", }} ellipsizeMode='tail' numberOfLines={1}>YEEZY Foam Runners “ Red October “</Text>
                
                <View
                style={styles.retailPrice}
                >
                 <Text 
        style={{
            fontFamily:'Helvetica Neue',
            fontSize:12, 
            fontWeight:"500",
            marginLeft:7,
        }}>Retail Price</Text>


      <Text
        style={{
            fontFamily:'Helvetica Neue',
            fontStyle:'italic',
            fontSize:17, 
            fontWeight:"500",
            marginRight:7,
            // backgroundColor:'blue',
        }}
      >$456</Text>
                </View>





                        <View
                        style={styles.size}
                        >
                            <View
                            style={{
                                width:'50%',
                                justifyContent:'center',
                                alignItems:'center',
                                // backgroundColor:'green',

                            }}
                            >
                                <Text style={styles.text}>A</Text>
                            </View>
                            
                            <View
                            style={{
                                height: '100%',
                                width: 1,
                                backgroundColor: '#ffffff',

                            }}>

                            </View>

                            <View
                              style={{
                                width:'50%',
                                justifyContent:'center',
                                alignItems:'center',
                                // backgroundColor:'orange',
                               
                            }}
                            >
                                <Text style={styles.text}>10</Text>
                            </View>


                        </View>

            </View>


        </View>
    </View>
  )
}

export default BagProductCheckout

const styles = StyleSheet.create({

innerContainer:{
    height:'85%',
    width:'94%',
    borderRadius:16,
    flexDirection:'row',
    backgroundColor:'#ffffff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
},

retailPrice:{
height:27,
width:'80%',
borderRadius:30,
marginTop:10,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
backgroundColor:'#c9c9c9',
},

size:{
    height:27,
    width:'80%',
    borderRadius:30,
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'space-between',
    backgroundColor:'#000000',
    },


    text:{
        color:'white',
        fontSize:18,
        fontWeight:'600',
    },

})