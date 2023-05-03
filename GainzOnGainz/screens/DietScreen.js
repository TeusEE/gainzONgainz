import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DietScreen() {
  return (
    <View style={styles.block}>
      <Text>DietScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex:1
  },
});

export default DietScreen;