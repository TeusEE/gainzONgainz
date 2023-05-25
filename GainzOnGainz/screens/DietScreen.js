import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import DrawerDateList from './../components/DrawerDateList';

function DietScreen({navigation}) {
  return (
    <View style={styles.block}>
      <DrawerDateList />
      <Text>DietScreen</Text>
      <Button title="Add My Diet" onPress={() => navigation.navigate('Add')} />
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
