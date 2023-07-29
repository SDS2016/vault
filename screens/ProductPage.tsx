import { StyleSheet, Text, View, SafeAreaView,Image, ScrollView } from 'react-native'
import PriceLabel from '@components/PriceLabel'
import GradingComp from '@components/GradingComp'
import RoundActionButton from '@components/Buttons/RoundActionButton'

////////////// import vault logo /////////////
import HeartButton from "@assets/heart-button.png";

const ProductPage = () => {
  return (


    <View style={styles.container}>
        


            <View
            style={{
                flex:.5,
                width:'100%',
                // backgroundColor:'green',
            }}
            >
                <SafeAreaView>
                <Text
                          style={{  
                            fontFamily:'Helvetica Neue',
                            fontSize:15, 
                            fontWeight:"500",
                            alignSelf:'center', 
                            }}
                        >Air Max 97 “ Obsidian Black ”</Text>

                

                </SafeAreaView>
                <View
                            style={{
                              flex:.8,
                              width:'100%',
                            //   backgroundColor:'yellow',
                            }}
                          >
                            <Image
                              style={{
                                height:'100%',
                                width:'100%',
                                resizeMode:'cover',
                              }}
                              source={{uri:'https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Jordan-PNG-Pic.png'}}
                            />
                        </View>

            </View>






            <View
            style={{
                flex:.5,
                 width:'100%',
                //  justifyContent:'center',
                 alignItems:'center',
                // backgroundColor:'blue',
                padding:18,
            }}
            >

                <View
                style={{
                    width:'100%',
                    flexDirection:'row',
                    borderBottomColor:'black',
                    paddingBottom:15,
                    borderBottomWidth:5,
                    marginBottom:5,
                    backgroundColor:'pink',

                }}
                >
<<<<<<< HEAD
                     <Image
                        style={{
                            height:70,
                            width:70,
                        }}
                        source={HeartButton}
                        />
                </View>
=======
                <PriceLabel price={'$500'}/>
>>>>>>> 54cfa1428d6e01172b5239c74ff67e06cb90c48c
                

                </View>

                {/* <GradingComp/> */}

                <RoundActionButton title={'ADD'}/>
                
                <View 
                style={{ 
                    flexDirection:'column',
                    marginTop:15, 
                    // marginBottom:'30%',
                    padding:5, 
                    // bottom:20,
                    // position:'absolute', 
                    // backgroundColor:'yellow',
                    }}>
                        <View 
                        style={{ 
                            alignItems:'flex-start', 
                            height:40, 
                            justifyContent: 'center',
                            }}>

                        <Text 
                        style={{  
                          fontFamily:'Helvetica Neue',
                          fontSize:24, 
                          fontWeight:"500", 
                          }}>Profile Details </Text>
                    </View>



                        

                            <ScrollView showsVerticalScrollIndicator={true} style={{ flexDirection:'column',  }}>
                                <Text  ellipsizeMode='clip' style={{  fontFamily:'Helvetica Neue',fontSize:15, fontWeight:"400", }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </Text>
                            </ScrollView>
                        

                </View>


            </View>



       
    </View>

    
  )
}

export default ProductPage

const styles = StyleSheet.create({
 container:{
    flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    
 },

//  productContainer:{
//     height:'90%',
//     width:'94%%',
//     // margin:40,
//     marginTop:'10%',
    
//     borderRadius:25,
//     position:'absolute',
//     alignItems:'center',
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 0,
//         height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 10,
//     backgroundColor:'white',
//  },


})