import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import DrawerDateList from './../components/DrawerDateList';
import DietList from './../components/DietList';
import AddItemBtn from '../components/AddItemBtn';

function DietScreen({navigation}) {
  return (
    <View style={styles.block}>
      <DrawerDateList />
      <DietList/>
      <AddItemBtn onEvent={() => navigation.navigate('Add')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex:1,
    backgroundColor:"#FFF"
  },
});

export default DietScreen;
