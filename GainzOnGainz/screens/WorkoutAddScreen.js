import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import WorkoutAddListItem from '../components/WorkoutAddListItem';

function WorkoutAddScreen() {
  return (
    <View style={styles.block}>
        <TextInput 
            style={styles.workoutTitle}
           placeholder="운동명"/>
        <View style={styles.separator}/>
        <View style={styles.listView}>
            <WorkoutAddListItem title="무게" unit="KG" hint="25"/>
            <WorkoutAddListItem title="횟수" unit="회" hint="5"/>
            <WorkoutAddListItem title="휴식" unit="초" hint="30"/>
        </View>
        <View style={styles.separator}/>
    </View>
  );
}


const styles = StyleSheet.create({
  block: {
    flex:1,
    backgroundColor:"#FFF",
    paddingHorizontal:25
  },
  separator:{
    width: "100%",
    textAlign: "center",
    borderWidth: 0.7,
    borderRadius: 36,
    borderStyle: 'solid',
    borderColor:"#E5E5E5"
  },
  listView : {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginVertical:18
  },
  workoutTitle:{
    fontSize:24,
    fontWeight:"600",
    marginVertical:20
  }
});

export default WorkoutAddScreen;
