import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function WorkoutScreen() {
  return (
    <View style={styles.block}>
      <Text>WorkoutScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default WorkoutScreen;
