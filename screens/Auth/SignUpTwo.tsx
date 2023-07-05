import { StyleSheet, Text, View,TextInput,ImageBackground, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AuthWhiteOverlay from '@components/AuthWhiteOverlay';
import ActionButton from '@components/Buttons/ActionButton';
import InputTemp from '@components/InputTemp';
import React from 'react'

const SignUpTwo = () => {

    const navigation = useNavigation();

    const [address, changeAddress] = React.useState('');
    const [zip, changeZip] = React.useState('')
    const [state, changeState] = React.useState('');
    const [city, changeCity] = React.useState('');
    const [apt, changeApt] = React.useState('');
    const [gender, changeGender] = React.useState('');
    const [birth, changeBirth] = React.useState('');
    const [phone, changePhone] = React.useState('');

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
                marginTop:'30%',
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'green',
            }}>
            


    {/* //////////////// form /////////////////////// */}

        <View style={{
            
            width:'70%',
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'blue',
            }}>




            {/* /////////////// address ///////////////// */}

            <View
            style={{
               
                width:'100%',
                paddingLeft:'3%',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'yellow',

            }}
        >
            <TextInput
                style={styles.input}
                    placeholder="Address"
                    onChangeText={address=>changeAddress(address)}
                    value={address}
                    >
                    </TextInput>

            

                    </View>




            {/* //////////// city, zip /////////// */}

        <View
            style={{
               
                width:'100%',
                paddingLeft:'5%',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'yellow',

            }}
        >


            <InputTemp
                style={{
                    
                    minWidth:'65%', 
                    maxWidth:'65%',}}
                placeholder="City"
                onChangeText={city=>changeCity(city)}
                value={city}
            
            />

            <InputTemp
                style={{
                    minWidth:'35%', 
                    maxWidth:'35%',}}
                placeholder="Zip"
                onChangeText={zip=>changeZip(zip)}
                value={zip}
            
            />
        
        </View>

            {/* //////////// state, apt, gender //////////////*/}

        
            <View
            style={{
               
                width:'100%',
                paddingLeft:'8%',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'yellow',

            }}
        >


            <InputTemp
                style={{
                    
                    minWidth:'25%', 
                    maxWidth:'25%',}}
                placeholder="State"
                onChangeText={state=>changeState(state)}
                value={state}
            
            />

            <InputTemp
                style={{
                    minWidth:'25%', 
                    maxWidth:'25%',}}
                placeholder="Apt"
                onChangeText={apt=>changeApt(apt)}
                value={apt}
            
            />

            <InputTemp
                style={{
                    minWidth:'50%', 
                    maxWidth:'50%',}}
                placeholder="Gender"
                onChangeText={gender=>changeGender(gender)}
                value={gender}
            
            />
        
        </View>






            

            {/* /////////////// D.O.B, Phone //////////// */}

            <View
            style={{
               
                width:'100%',
                paddingLeft:'5%',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'yellow',

            }}
        >


            <InputTemp
                style={{
                    
                    minWidth:'40%', 
                    maxWidth:'40%',}}
                placeholder="D.O.B"
                onChangeText={birth=>changeBirth(birth)}
                value={birth}
            
            />

            <InputTemp
                style={{
                    minWidth:'60%', 
                    maxWidth:'60%',}}
                placeholder="Phone"
                onChangeText={phone=>changePhone(phone)}
                value={phone}
            
            />
        
        </View>

        </View>
                
                <ActionButton 
                    title={'Next'} 
                    onPress={()=> navigation.navigate('SignUpThree')} 
                    // backgroundColor={{backgroundColor:'red'}}
                    />

            </View>
            </ImageBackground>
        
    </View>
  )
}

export default SignUpTwo

const styles = StyleSheet.create({



    input:{
        fontSize:17,
        color:'black',
        marginLeft:2,
        paddingLeft:13,
        flexDirection:'row',
        minWidth:"100%",
        maxWidth:"100%",
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