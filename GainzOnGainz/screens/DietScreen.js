import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import DrawerDateList from './../components/DrawerDateList';
import DietDateContext, {
  DietDateContextProvider,
} from '../contexts/DietDateContext';

function DietScreen({navigation}) {
  return (
    <View style={styles.block}>
      <DietDateContextProvider>
        <DrawerDateList />
        <Text>DietScreen</Text>
        <Button title="Add My Diet" onPress={() => navigation.navigate('Add')} />
      </DietDateContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default DietScreen;
