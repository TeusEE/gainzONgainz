import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, Pressable} from 'react-native';


const AddItemBtn = ({onEvent}) => {  
  return (
    <View style= {styles.outer_block}>
      <Pressable
        style = {styles.press_block}
        onTouchStart={() => onEvent()}
      >
        <View style={styles.block}>
          <Text style={{fontSize:40}}>+</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outer_block : {
    width : "100%",
    height : "12%",
    marginVertical : 16,
  },
  press_block : {
    width : "100%",
    alignItems : "center",
  },
  block: {
    width : "90%", 
    backgroundColor : "#e8e8e8",
    height : "100%",
    alignItems : "center",
    justifyContent: 'center',
    borderRadius : 16,
    borderColor : "#e8e8e8",
    borderWidth : 3
  },
});

export default AddItemBtn;
