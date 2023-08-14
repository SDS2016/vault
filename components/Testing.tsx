import { StyleSheet, Text, View, } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import PhoneInput from 'react-phone-number-input/react-native-input'
import { useState } from 'react';
import React from 'react'

import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

import DateTimePicker from "@react-native-community/datetimepicker";


const Testing = () => {

    const [value, setValue] = useState()
    // const [date, setDate] = useState('09-10-2021')


    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
  return (


    <View style={styles.container}>

      <RNPickerSelect
      
            placeholder={{
                label: 'Select your state',
                value: null,
                color: 'black',
            
                
            }}

            style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 20,
                  right: 10,
                },
                placeholder: {
                  color: 'purple',
                  fontSize: 12,
                  fontWeight: 'bold',
                },
              }}
      
      
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'AL', value: 'AL' },   ////// 1. Alabama
                { label: 'AK', value: 'AK' },   ////// 2. Alaska
                { label: 'AZ', value: 'AZ' },   ////// 3. Arizona
                { label: 'AR', value: 'AR' },   ////// 4. Arkansas
                { label: 'CA', value: 'CA' },   ////// 5. California
                { label: 'CO', value: 'CO' },   ////// 6. Colorado
                { label: 'CT', value: 'CT' },   ////// 7. 
                { label: 'DE', value: 'DE' },
                { label: 'DC', value: 'DC' },
                { label: 'FL', value: 'FL' },
                { label: 'GA', value: 'GA' },
                { label: 'HI', value: 'HI' },
                { label: 'ID', value: 'ID' },
                { label: 'IL', value: 'IL' },
                { label: 'IN', value: 'IN' },
                { label: 'IA', value: 'IA' },
                { label: 'KS', value: 'KS' },
                { label: 'KY', value: 'KY' },
                { label: 'LA', value: 'LA' },
                { label: 'ME', value: 'ME' },
                { label: 'MD', value: 'MD' },
                { label: 'MA', value: 'MA' },
                { label: 'MI', value: 'MI' },
                { label: 'MN', value: 'MN' },
                { label: 'MS', value: 'MS' },
                { label: 'MO', value: 'MO' },
                { label: 'MT', value: 'MT' },
                { label: 'NE', value: 'NE' },
                { label: 'NV', value: 'NV' },
                { label: 'NH', value: 'NH' },
                { label: 'NJ', value: 'NJ' },
                { label: 'NM', value: 'NM' },
                { label: 'NY', value: 'NY' },
                { label: 'NC', value: 'NC' },
                { label: 'ND', value: 'ND' },
                { label: 'OH', value: 'OH' },
                { label: 'OK', value: 'OK' },
                { label: 'OR', value: 'OR' },
                { label: 'PA', value: 'PA' },
                { label: 'RI', value: 'RI' },
                { label: 'SC', value: 'SC' },
                { label: 'SD', value: 'SD' },
                { label: 'TN', value: 'TN' },
                { label: 'TX', value: 'TX' },
                { label: 'UT', value: 'UT' },
                { label: 'VT', value: 'VT' },
                { label: 'VA', value: 'VA' },
                { label: 'WA', value: 'WA' },
                { label: 'WV', value: 'WV' },
                { label: 'WI', value: 'WI' },
                { label: 'WY', value: 'WY' },
                
            ]}
        />


<PhoneInput
      style={styles.inputIOS}
      placeholder="Phone"
      defaultCountry="US"
      value={value}
      onChange={(value)=>console.log(value)} />



{/* <DateTimePicker 

mode="date"
display="default" 
value={new Date()}
onChange={()=>console.log(value)} 
style={{
    
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor:'white',
}}

/> */}


{/* <Text style={styles.text}>Birth Date :</Text>
<DateTimePicker 
          style={styles.datePickerStyle}
          value={new Date()}
          mode="date"
          dis
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        /> */}

<>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date);console.log(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>

     <Text>{JSON.stringify(date.toLocaleDateString())}</Text>
    </View>
  )
}

export default Testing

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
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