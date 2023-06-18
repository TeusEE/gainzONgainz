import React from 'react';
import { StyleSheet, View} from 'react-native';
import WorkoutList from '../components/WorkoutList';
import CalendarView from '../components/CalendarView'
import WorkoutContext, { WorkoutContextProvider } from '../contexts/WorkoutContext';
import ImagePickerItem from '../components/ImagePicker';
import AddItemBtn from '../components/AddItemBtn';

function WorkoutScreen({navigation}) {
  return (
    <WorkoutContextProvider>
      <View style={styles.block_calendar}>
        <CalendarView/>
      </View>
      <View style={styles.block}>
        <WorkoutList/>
        <AddItemBtn onEvent={() => navigation.navigate('add')} />
      </View>
      <View style={styles.footer}>
        <ImagePickerItem context={WorkoutContext}/>
      </View>
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
