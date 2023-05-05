import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerDate from './../components/DrawerDate'
import DietDateContext, {DietDateContextProvider} from '../contexts/DietDateContext';

function DietScreen() {
  return (
    <View style={styles.block}>
      <DietDateContextProvider>      
        <DrawerDate/>
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