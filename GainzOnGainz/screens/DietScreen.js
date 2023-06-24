import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import DrawerDateList from '../components/DrawerDateList';
import DietList from '../components/diet/DietList';
import AddItemBtn from '../components/AddItemBtn';
import Recommend from '../components/Recommend';

function DietScreen({navigation}) {
  return (
    <>
      <View style={styles.block}>
        <DrawerDateList />
        <DietList />
        <AddItemBtn onEvent={() => navigation.navigate('Add')} />
      </View>
      <Recommend></Recommend>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default DietScreen;
