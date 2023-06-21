import React, { useEffect } from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

function WorkoutAddListItem({onChange, index}) {
  const onChangeText = (text, title) => {
    onChange(text, title, index)
  };

  return (
    <View style={styles.block}>
          <WorkoutInfoItem onChange={onChangeText}
            title="무게" unit="KG" hint="25"/>
          <WorkoutInfoItem onChange={onChangeText}
            title="횟수" unit="회" hint="5"/>
          <WorkoutInfoItem onChange={onChangeText}
            title="휴식" unit="초" hint="30"/>
    </View>
  );
}

function WorkoutInfoItem({onChange, title, unit, hint}) {
  return (
    <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={hint}
                keyboardType='numeric'
                maxLength={3} 
                onChangeText={(text) => onChange(text, title)}
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
