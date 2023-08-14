import { StyleSheet, Text, View,TextInput,ImageBackground,SafeAreaView } from 'react-native'
import AuthWhiteOverlay from '../../components/AuthWhiteOverlay';
import ActionButton from '../../components/Buttons/ActionButton';
import { useRoute } from '@react-navigation/native';
import React from 'react'

/////// form imports /////////
import { Formik } from 'formik';
import * as Yup from 'yup';

////////////// import assets /////////////
import SpiralBackground from "@assets/spiralbackgroundauth.png";

const SignUpThree = () => {

    const route = useRoute()

    const [email, changeEmail] = React.useState('');
    const [password, changePassword] = React.useState('');
    const [confirmPassword, changeConfirmPassword] = React.useState('');


  return (
    <View
    style={{
        flex:1,
        paddingTop:'10%',
        alignItems:'center',
    }}
    >

        
        <ImageBackground
        source={SpiralBackground} 
        resizeMode="cover" 
        style={{flex:1, width:'100%',}}>

            <AuthWhiteOverlay/>
            <View 
            style={{
                flex:.4,
                marginTop:30,
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'green',
            }}>
            
            <SafeAreaView>
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
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    >
                    </TextInput>


                    <TextInput
                style={styles.input}
                    placeholder="Confirm Password"
                    onChangeText={confirmPassword=>changeConfirmPassword(confirmPassword)}
                    value={confirmPassword}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    >
                    </TextInput>


                    </SafeAreaView>

                    <ActionButton 
                    title={'Next'} 
                    // onPress={''} 
                    // backgroundColor={{backgroundColor:'blue'}}
                    />

           <Text> fullName: {route.params.name}</Text>
           <Text> address: {route.params.address}</Text>
           <Text> city: {route.params.city}</Text>
           <Text> state: {route.params.state}</Text>
           <Text> D.O.B: {route.params.dateOfBirth}</Text>
           <Text> gender: {route.params.gender}</Text>
           <Text> phone: {route.params.phone}</Text>
           

            </View>
            </ImageBackground>
        
    </View>
  )
}

export default SignUpThree

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