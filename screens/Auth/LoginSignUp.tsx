import { StyleSheet,View,Image,Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthWhiteOverlay from '@components/AuthWhiteOverlay';
import ActionButton from '@components/Buttons/ActionButton';
import React from 'react'

// const image = {uri:''};




const LoginSignUp = () => {

    const navigation = useNavigation();

const [email, changeEmail] = React.useState('');
const [password, changePassword] = React.useState('');


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
        
        <ImageBackground
        source={require('/Users/ericfreeman/vaultApp/assets/dark-spiral.png')} 
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
                            source={require('/Users/ericfreeman/vaultApp/assets/vault-blk-logo.png')}
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
                             
                        >
                        </TextInput>

                        <ActionButton 
                        title={'Login'} 
                        // onPress={''} 
                        // backgroundColor={{backgroundColor:'blue'}}
                        />
                        
                        <View>
                            <TouchableOpacity activeOpacity={.7}  >
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