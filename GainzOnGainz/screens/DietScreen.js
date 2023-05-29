import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import DrawerDateList from './../components/DrawerDateList';
import DietList from './../components/DietList';

function DietScreen({navigation}) {
  return (
    <View style={styles.block}>
      <DrawerDateList />
      <DietList/>
      <View style = {{marginTop : 10}}>
        <Button title="Add My Diet" onPress={() => navigation.navigate('Add')} />
      </View>
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
