import { StyleSheet, Text,TextInput, View,SafeAreaView, ImageBackground } from 'react-native'
import ActionButton from '../../components/Buttons/ActionButton';
import AuthWhiteOverlay from '../../components/AuthWhiteOverlay';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function ForgotPassword() {

    const navigation = useNavigation();

    const [email, changeEmail] = React.useState('');

  return (
    <View
    style={{
        flex:1,
        
        alignItems:'center',
    }}
    >

        
        <ImageBackground
        source={require('/Users/ericfreeman/vaultApp/assets/spiralbackgroundauth.png')} 
        resizeMode="cover" 
        style={{flex:1, width:'100%',}}>

            <AuthWhiteOverlay/>
            <View 
            style={{
                flex:.4,
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'green',
            }}>
            <Text>*please enter email to reset password*</Text>
            <TextInput
                style={styles.input}
                    placeholder="Email"
                    onChangeText={email=>changeEmail(email)}
                    value={email}
                    >
                    </TextInput>

                    <ActionButton 
                    title={'Submit'} 
                    onPress={()=> navigation.navigate('')} 
                    // backgroundColor={{backgroundColor:''}}
                    />


            </View>
            </ImageBackground>
        
    </View>
  )
}

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