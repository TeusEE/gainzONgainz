import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { WorkoutDetails } from '../../object/workout';

function WorkoutAddListItem({value = WorkoutDetails}) {
  return (
    <View style={styles.block}>
          <WorkoutInfoItem value={value} title="무게" unit="KG" hint="25"/>
          <WorkoutInfoItem value={value} title="횟수" unit="회" hint="5"/>
          <WorkoutInfoItem value={value} title="휴식" unit="초" hint="30"/>
    </View>
  );
}

function WorkoutInfoItem({value = WorkoutDetails, title, unit, hint}) {
  const onChange = (text) => {
    switch (title) {
      case "무게":
        value.prototype.weight = Number.parseInt(text);
        break;
      case "횟수":
        value.prototype.number = Number.parseInt(text);
        break;
      case "휴식":
        value.prototype.rest = Number.parseInt(text);
        break;
    }
  };

  return (
    <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={hint}
                keyboardType='numeric'
                maxLength={3} 
                onChangeText={onChange}
                />
           <Text>{unit}</Text>
        </View>
    </View>
  );
}



const styles = StyleSheet.create({
  block:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginVertical:18
  },
  title:{
    fontWeight:"600",
    fontSize:16,
    marginBottom:18
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default WorkoutAddListItem;
