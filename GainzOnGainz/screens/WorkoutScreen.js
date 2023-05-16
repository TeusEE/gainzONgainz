import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import WorkoutList from '../components/WorkoutList';
import { WorkoutContextProvider } from '../contexts/WorkoutContext';

function WorkoutScreen() {
  return (
    <WorkoutContextProvider>
      <View style={styles.block}>
        <WorkoutList/>
      </View>
    </WorkoutContextProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default WorkoutScreen;
