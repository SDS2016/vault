import { StyleSheet, Text, View, Modal,Pressable } from 'react-native'

import {Picker} from '@react-native-picker/picker';
import BottomSheetTemp from '@components/BottomSheetTemp';
import 'react-native-gesture-handler';

import React from 'react'
import { useState } from 'react';

const TestBlank = () => {

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPressIn={() => setModalVisible(true)}
        onPressOut={() => setModalVisible(false)}
        >
            
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

    {/* <View style={styles.modal}> */}

    <Modal
        
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // presentationStyle={'pageSheet'}
        
        onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
    <Picker
        style={{height:'40%',backgroundColor:'pink',}}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        </Picker>
    </Modal>
    {/* </View> */}

      <BottomSheetTemp/>
    </View>
  )
}

export default TestBlank

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"yellow",
    },

    modal:{
        height:"30%",
        width:"100%",

        backgroundColor:"green",

    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },

      
})