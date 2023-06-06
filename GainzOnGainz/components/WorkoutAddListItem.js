import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

function WorkoutAddListItem({title, unit, hint}) {
  return (
    <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={hint}
                keyboardType='numeric'
                maxLength={10} />
           <Text>{unit}</Text>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
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
