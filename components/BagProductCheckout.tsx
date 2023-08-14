import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FormatCurrency from '@utils/utils';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const BagProductCheckout = (props) => {

    return (

        <View
            style={{
                height: 160,
                minWidth: '94%',
                borderRadius: 20,
                backgroundColor: '#d1d1d1',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
            }}>
            <View
                style={styles.innerContainer}
            >


                {/* //////// inside the inner container product image and details //////// */}

                <View
                    style={{
                        height: '100%',
                        width: '38%',
                        paddingLeft:10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor:'blue',
                    }}
                >
                    <Image
                        style={{
                            height: '100%',
                            width: '100%',
                            resizeMode: 'contain',
                           
                            // backgroundColor:'yellow',
                        }}
                        source={{ uri: props.product.images[0] }}
                    />
                </View>

                <View
                    style={{
                        height: '100%',
                        width: '65%%',
                        padding: 10,
                        // justifyContent:'center',
                        alignItems: 'center',
                        // backgroundColor:'green',
                        flexDirection: 'column',

                    }}
                >

                    <Text style={{ fontFamily: 'Helvetica Neue', fontSize: 11, fontWeight: "500", }} ellipsizeMode='tail' numberOfLines={1}>{props.product.description}</Text>

                    <View
                        style={styles.retailPrice}
                    >
                        <Text
                            style={{
                                fontFamily: 'Helvetica Neue',
                                fontSize: 12,
                                fontWeight: "500",
                                marginLeft: 7,
                            }}>Retail Price</Text>


                        <Text
                            style={{
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'italic',
                                fontSize: 17,
                                fontWeight: "500",
                                marginRight: 7,
                                // backgroundColor:'blue',
                            }}
                        >{FormatCurrency(props.product.default_price.unit_amount / 100, props.product.default_price.currency)}</Text>
                    </View>





                    <View
                        style={styles.size}
                    >
                        <View
                            style={{
                                width: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
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
                                width: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor:'orange',

                            }}
                        >
                            <Text style={styles.text}>10</Text>
                        </View>


                    </View>


                    <TouchableOpacity style={styles.removeProduct} onPress={()=>props.removeProduct(props.product)}>
                        <Text style={{color:'red'}}>Remove from cart</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </View>
    )
}

export default BagProductCheckout

const styles = StyleSheet.create({

    removeProduct:{
        marginTop:10,
    },

    innerContainer: {
        height: '85%',
        maxWidth: '88%',
        borderRadius: 16,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

    retailPrice: {
        height: 27,
        width: '80%',
        borderRadius: 30,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#c9c9c9',
    },

    size: {
        height: 27,
        width: '80%',
        borderRadius: 30,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'space-between',
        backgroundColor: '#000000',
    },


    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },

})