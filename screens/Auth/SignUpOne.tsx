import { StyleSheet, Text,TextInput, View,SafeAreaView, ImageBackground, TouchableOpacity,TouchableWithoutFeedback, 
    Keyboard, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import ActionButton from '@components/Buttons/ActionButton';
import AuthWhiteOverlay from '@components/AuthWhiteOverlay';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'


////////////// import assets /////////////
import SpiralBackground from "@assets/spiralbackgroundauth.png";


////////////// firebase imports cloud firestore /////////////////
import firestore from '@react-native-firebase/firestore';





const FullNameSchema = Yup.object().shape({
  
    fullName: Yup.string()
      .min(3, 'please enter name')
      .max(20, '')
      .required('Required')
      .matches(/^[a-z ,.'-]+$/i,'please enter a valid name'),

      
  
  });



export default function SignUpOne() {

    const navigation = useNavigation();

    // const [fullName, changeFullName] = React.useState('');


    const handleSubmit = async (values)=> {

    firestore().collection('users').add({
        fullName: values.fullName,
    })
    .catch((error) => {
            alert(error);
        });navigation.navigate('SignUpTwo'|| 'SignUpThree', 
        {fullName: values.fullName}
        );
        
    
    }


    // {   screen:'SignUpThree',
    // params:{fullName: values.fullName}}


  return (

<KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.container}
  >
<TouchableWithoutFeedback onPress={() =>{
Keyboard.dismiss(); }}>



    <View
    style={{
        flex:1,
        width:'100%',
        alignItems:'center',
    }}
    >
<Formik
      initialValues={{ 
       fullName: '',

      }}
      validationSchema={FullNameSchema}
      onSubmit={value => handleSubmit(value)}
      
      >
        {({ handleChange, handleBlur, setFieldTouched, handleSubmit, errors, touched, values }) => (
        
        <ImageBackground
        source={SpiralBackground} 
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




            
            <TextInput
                style={styles.input}
                    placeholder="Full Name"
                    onChangeText={handleChange('fullName')}
                    value={values.fullName}
                    onBlur={handleBlur('fullName')}
                    >

                    </TextInput>

                    {touched.fullName && errors.fullName && (<Text style={styles.errorMessage}>{errors.fullName}</Text>)}


            

                    <ActionButton 
                    title={'Next'} 
                    onPress={handleSubmit} 
                    // backgroundColor={{backgroundColor:'blue'}}
                    />


            </View>
           


            </ImageBackground>
          )}
            </Formik> 
    </View>

    </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        width:'100%',
        // alignItems:'center',
        // justifyContent:'center',
    },

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