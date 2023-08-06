import { StyleSheet,View,Image,Text, TextInput, ImageBackground, TouchableOpacity,TouchableWithoutFeedback, 
    Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthWhiteOverlay from '@components/AuthWhiteOverlay';
import ActionButton from '@components/Buttons/ActionButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'

////////////// import assets /////////////
import DarkSpiral from "@assets/dark-spiral.png";
import VaultBlkLogo from "@assets/vault-blk-logo.png";







const LoginSignUp = () => {

    const navigation = useNavigation();

    const [email, changeEmail] = React.useState('');
    const [password, changePassword] = React.useState('');




  return (

//  <KeyboardAvoidingView
//   behavior={Platform.OS === "ios" ? "padding" : "height"}
//   style={styles.container}
//   >
// <TouchableWithoutFeedback onPress={() =>{
// Keyboard.dismiss(); }}>   


    <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
        
        <ImageBackground
        source={DarkSpiral} 
        resizeMode="cover" 
        style={{flex:1, width:'100%',}}>

            <AuthWhiteOverlay/>
            <View 
            style={{
            flex:.9, 
            marginTop:'40%',
            marginBottom:'10%',
            alignItems:'center',
            // backgroundColor:'green',
            width:'100%',
            }}>

                



                {/* ///////////////////  vault logo /////////////////// */}
                    <View 
                     style={{
                        padding:5,
                        width:'100%',
                        alignItems:'center',
                        justifyContent:'center',
                        // backgroundColor:'blue',
                        marginBottom:30,
                        }}>
                        <Image
                            style={{
                                height:50,
                                width:100,
                            }}
                            source={VaultBlkLogo}
                            />
                    </View>


                {/* ///////////////////////  form text inputs   ////////////////////*/}






                    <View 
                        style={{
                            width:'100%',
                            alignItems:'center',
                            justifyContent:'center',
                            // backgroundColor:'yellow',
                            }}>
                        <TextInput
                             style={styles.input}
                             placeholder="Email"
                             onChangeText={email=>changeEmail(email)}
                             value={email}
                        >
                        </TextInput>
                        <TextInput
                             style={styles.input}
                             placeholder="Password"
                             onChangeText={password=>changePassword(password)}
                             value={password}
                             secureTextEntry={true}
                             
                        >
                        </TextInput>

                        <ActionButton 
                        title={'Login'} 
                        // onPress={''} 
                        // backgroundColor={{backgroundColor:'blue'}}
                        />
                        
                        <View>
                            <TouchableOpacity activeOpacity={.7} onPress={()=> navigation.navigate('ForgotPassword')} >
                            <Text style={{ color:"black", marginTop:20,marginBottom:40,}}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    
                        <ActionButton 
                        title='Create Account' onPress={()=> navigation.navigate('SignUpOne')} 
                        color={{color:'black',}}
                        backgroundColor={{backgroundColor:'white'}}
                        />

                    </View>

                


            </View>
        </ImageBackground>
        
  </View>


    //  </TouchableWithoutFeedback>
    //  </KeyboardAvoidingView>
  )
}

export default LoginSignUp

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