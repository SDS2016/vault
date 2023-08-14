import { StyleSheet, Text, View,TextInput,ImageBackground,TouchableOpacity,TouchableWithoutFeedback, 
    Keyboard, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AuthWhiteOverlay from '@components/AuthWhiteOverlay';
import { useRoute } from '@react-navigation/native';
import ActionButton from '@components/Buttons/ActionButton';
import InputTemp from '@components/InputTemp';
import DatePicker from 'react-native-date-picker'
import PhoneInput from 'react-phone-number-input/react-native-input'
import RNPickerSelect from 'react-native-picker-select';
import React from 'react';


//////// form imports ////////////
import { Formik } from 'formik';
import * as Yup from 'yup';


////////////// import assets /////////////
import SpiralBackground from "@assets/spiralbackgroundauth.png";


//////////// yup form validation ////////////////////////

const addressSchema = Yup.object().shape({
  
    address: Yup.string()
      .min(10, 'please enter address')
      .max(20, '')
      .required('Address Required')
      .matches(/[A-Za-z0-9'\.\-\s\,]/,'please enter a valid address'),

    city: Yup.string()
      .min(4, 'please enter city')
      .max(20, '')
      .required('City Required')
      .matches(/[A-Za-z0-9'\.\-\s\,]/,'please enter a valid address'),
      
    zip: Yup.string()
       .min(5, 'please enter valid zip')
    //    .max(50, 'password is too long!')
       .required('Must enter zip')
       .matches(/^[0-9]{5}[-\s]?(?:[0-9]{4})?$/,
       'zip must be 5 digits'
       
       ),

    state: Yup.string()
        .min(2, 'please select your state')
        .required('Must select a state'),

    apt: Yup.string()
        .min(1,'please enter appartment' ),
        // .max(5, ''),
        
  
    gender: Yup.string()
       .required('Select a gender'),
        
    dateOfBirth: Yup.string()
        .required('please provide date of'),
         
         
    phone: Yup.string()
          .min(10, 'please enter phone')
        //   .required('Must enter phone')
  
  });



////////////////////////////////////////////////////////////

const SignUpTwo = () => {

    const navigation = useNavigation();
    const route = useRoute()

    // const [address, changeAddress] = React.useState('');
    // const [zip, changeZip] = React.useState('')
    // const [state, changeState] = React.useState('');
    // const [city, changeCity] = React.useState('');
    // const [apt, changeApt] = React.useState('');
    // const [gender, changeGender] = React.useState('');
    // const [birth, changeBirth] = React.useState('');
    // const [phone, changePhone] = React.useState('');

    const handlePhone =(value)=> {

        console.log(value)

    }

    

    const handleSubmit = async (values)=> {
    const name = JSON.stringify(values.fullName)
        navigation.navigate('SignUpThree',
            {
                fullName: name ,
                address: values.address,
                city: values.city,
                state: values.state,
                apt: values.apt,
                gender: values.gender,
                dateOfBirth: values.dateOfBirth,
                phone: values.phone,

            });
            
        
        }






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
    backgroundColor:'white',
}}
>
    <Formik
      initialValues={{ 
       address: '',
       city: '',
       zip: '',
       state: '',
       apt: '',
       gender: '',
       dateOfBirth: '',
       phone: '',

      }}
      validationSchema={addressSchema}
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
                marginTop:'30%',
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                // backgroundColor:'green',
            }}>
            


    {/* //////////////// form /////////////////////// */}

    <SafeAreaView>

        <View style={{
            
            width:'70%',
            paddingTop:'20%',
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
                    onChangeText={handleChange('address')}
                    value={values.address}
                    onBlur={handleBlur('address')}
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
                onChangeText={handleChange('city')}
                value={values.city}
                onBlur={handleBlur('city')}
            
            />

            <InputTemp
                style={{
                    minWidth:'35%', 
                    maxWidth:'35%',}}
                placeholder="Zip"
                onChangeText={handleChange('zip')}
                value={values.zip}
                onBlur={handleBlur('zip')}
            
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
                onChangeText={handleChange('state')}
                value={values.state}
                onBlur={handleBlur('state')}
            
            />

            <InputTemp
                style={{
                    minWidth:'25%', 
                    maxWidth:'25%',}}
                placeholder="Apt"
                onChangeText={handleChange('apt')}
                value={values.apt}
                onBlur={handleBlur('apt')}
            
            />

            <InputTemp
                style={{
                    minWidth:'50%', 
                    maxWidth:'50%',}}
                placeholder="Gender"
                onChangeText={handleChange('gender')}
                value={values.gender}
                onBlur={handleBlur('gender')}
            
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
                onChangeText={handleChange('dateOfBirth')}
                value={values.dateOfBirth}
                onBlur={handleBlur('dateOfBirth')}
            
            />


            <PhoneInput
            style={styles.phoneInput}
            placeholder="Phone"
            defaultCountry="US"
            // value={values.phone}
            onChange={handleChange('phone')}
            // onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            />

            {/* <InputTemp
                style={{
                    minWidth:'60%', 
                    maxWidth:'60%',}}
                placeholder="Phone"
                onChangeText={handleChange('Phone')}
                value={values.phone}
                onBlur={handleBlur('Phone')}
            
            /> */}
        
        </View>

        </View>
        

        </SafeAreaView>




                <ActionButton 
                    title={'Next'} 
                    onPress={handleSubmit} 
                    // backgroundColor={{backgroundColor:'red'}}
                    />


                    <Text> fullName: {route.params.fullName}</Text>

                

            {/* ////////////////// view container for error codes */}
                <View
                style={{
                    marginTop:30,
                }}
                >

                    {touched.address && errors.address && (<Text style={styles.errorMessage}>{errors.address}</Text>)}
        {touched.city && errors.city && (<Text style={styles.errorMessage}>{errors.city}</Text>)}       
        {touched.zip && errors.zip && (<Text style={styles.errorMessage}>{errors.zip}</Text>)}      
        {touched.state && errors.state && (<Text style={styles.errorMessage}>{errors.state}</Text>)}      
        {touched.apt && errors.apt && (<Text style={styles.errorMessage}>{errors.apt}</Text>)}      
        {touched.gender && errors.gender && (<Text style={styles.errorMessage}>{errors.gender}</Text>)}       
        {touched.dateOfBirth && errors.dateOfBirth && (<Text style={styles.errorMessage}>{errors.dateOfBirth}</Text>)}      
        {touched.phone && errors.phone && (<Text style={styles.errorMessage}>{errors.phone}</Text>)}
                    </View>

            </View>
            
            </ImageBackground>
        
    
      )}
      </Formik> 

        </View>
    </TouchableWithoutFeedback>
</KeyboardAvoidingView>
  )
}

export default SignUpTwo

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

    },

    phoneInput:{
        fontSize:17,
        color:'black',
        marginLeft:2,
        paddingLeft:13,
        flexDirection:'row',
        minWidth:'60%', 
        maxWidth:'60%',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        margin:5,
        marginTop:10,
        backgroundColor:'white',
        borderRadius: 16,
        borderColor: "black",
        borderWidth:2,

    },

    inputIOS: {
        fontSize: 20,
        width:180,
        // paddingVertical: 12,
        // paddingHorizontal: 10,
        padding:10,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 15,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },

      title: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
      },
      datePickerStyle: {
        width: 230,
      },
      text: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color : "#000"
      }

    



})


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        alignSelf:'center',
        width:'50%',
      fontSize: 15,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: 'gray',
      borderRadius: 18,
      color: 'black',
    //   backgroundColor:'green',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    
  });