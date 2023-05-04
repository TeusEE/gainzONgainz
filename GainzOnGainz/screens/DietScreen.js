import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerDate from './../components/DrawerDate'

function DietScreen() {
  return (
    <View style={styles.block}>
      <DrawerDate/>
      <Text>DietScreen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
  },
});

export default DietScreen;