import React from 'react';
import { StyleSheet, View} from 'react-native';
import WorkoutList from '../components/workout/WorkoutList';
import CalendarView from '../components/CalendarView'
import AddItemBtn from '../components/AddItemBtn';

function WorkoutScreen({navigation}) {
  return (
    <View style={styles.block}>
      <View style={styles.block_calendar}>
        <CalendarView/>
      </View>
      <View style={styles.block}>
        <WorkoutList/>
      </View>
      <View style={styles.addBtn}>
        <AddItemBtn onEvent={() => navigation.navigate('add')} />
      </View>
    </View>
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
  },
  addBtn:{
    height:120,
    backgroundColor:"#FFF"
  }
});

export default WorkoutScreen;
