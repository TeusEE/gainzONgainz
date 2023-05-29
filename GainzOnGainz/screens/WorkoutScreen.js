import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import WorkoutList from '../components/WorkoutList';
import CalendarView from '../components/CalendarView'
import { WorkoutContextProvider } from '../contexts/WorkoutContext';
import ImagePickerItem from '../components/ImagePicker';

function WorkoutScreen({navigation}) {
  return (
    <WorkoutContextProvider>
      <View style={styles.block_calendar}>
        <CalendarView/>
      </View>
      <View style={styles.block}>
        <WorkoutList/>
      </View>
      <View style={styles.footer}>
        <ImagePickerItem/>
      </View>
      <Button
        title="운동 화면 이동"
        onPress={() => navigation.navigate('add')}
      />
    </WorkoutContextProvider>
  );
}

const styles = StyleSheet.create({
  block_calendar: {
  },
  block: {
    flex:1,
    backgroundColor:"#FFF"
  },
  footer:{
    height: 120,
    paddingLeft: 20,
    backgroundColor:"#FFF"
  }
});

export default WorkoutScreen;
