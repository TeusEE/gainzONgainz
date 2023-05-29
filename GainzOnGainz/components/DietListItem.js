import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
const Separator = () => (
  <View style={styles.verticleLine}/>
);

const DietListItem = ({time, data}) => {
  return (
    <View style={styles.block}>
      <Text style = {styles.time}>
        {time}
      </Text>
      <Separator/>
      <Text style = {styles.content}>
        {data}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection : "row",
    paddingVertical : 10,
  },
  time : {
    flex : 1,
    fontSize : 24,
    textAlign : "center"
  },
  content : {
    flex : 2,
    paddingLeft : 15,
    fontSize : 16
  },
  verticleLine: {
    height: '100%',
    width: 6,
    backgroundColor: '#000000',
  }
});

export default DietListItem;