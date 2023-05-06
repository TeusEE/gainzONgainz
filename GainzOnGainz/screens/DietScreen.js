import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerDateList from './../components/DrawerDateList'
import DietDateContext, {DietDateContextProvider} from '../contexts/DietDateContext';

function DietScreen() {
  return (
    <View style={styles.block}>
      <DietDateContextProvider>      
        <DrawerDateList/>
        <Text>DietScreen</Text>
      </DietDateContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
  },
});

export default DietScreen;