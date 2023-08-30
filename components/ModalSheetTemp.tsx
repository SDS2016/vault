import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
// import {GestureHandlerRootView }from 'react-native-gesture-handler';

const ModalSheetTemp = () => {
  // ref
//   const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

//   callbacks
//   const handlePresentModalPress = useCallback(() => {
//     bottomSheetModalRef.current?.present();
//   }, []);
  
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

//   renders
  return (

    
            <BottomSheetModal
            // ref={handlePresentModalPress}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            >
            <View style={styles.contentContainer}>
                
            </View>
            </BottomSheetModal>
      
   

  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//   },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ModalSheetTemp;