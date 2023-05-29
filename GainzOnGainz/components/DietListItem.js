import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, Pressable} from 'react-native';
const update_data = async () => {
  //todo
  //데이터 삭제하기 or 수정하기 기능 구현필요
}


const DietListItem = ({time, data}) => {
  let dis_time = time.substring(0, 2) + "시" + time.substring(3, 5) + "분"
  return (
    <Pressable
     onPress={() => {update_data()}}>
      <View style={styles.block}>
        <Text style = {styles.time}>
          {dis_time}
        </Text>
        <Text style = {styles.content}>
          {data}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingVertical : 10,
    marginBottom : 8,
    marginHorizontal : 16,
    borderColor : 'black',
    borderWidth : 1.5,
    borderRadius : 16
  },
  time : {
    fontSize : 24,
    paddingLeft : 10,
    textAlign : "left"
  },
  content : {
    marginTop : 5,
    paddingLeft : 25,
    fontSize : 14
  },
});

export default DietListItem;