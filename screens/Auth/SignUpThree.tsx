import { StyleSheet, Text, View,TextInput,ImageBackground,SafeAreaView } from 'react-native'
import AuthWhiteOverlay from '../../components/AuthWhiteOverlay';
import ActionButton from '../../components/Buttons/ActionButton';
import React from 'react'


////////////// import assets /////////////
import SpiralBackground from "@assets/spiralbackgroundauth.png";

const SignUpThree = () => {

    const [email, changeEmail] = React.useState('');
    const [password, changePassword] = React.useState('');
    const [confirmPassword, changeConfirmPassword] = React.useState('');


  return (
    <View
    style={{
        flex:1,
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




                    <ActionButton 
                    title={'Next'} 
                    // onPress={''} 
                    // backgroundColor={{backgroundColor:'blue'}}
                    />


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