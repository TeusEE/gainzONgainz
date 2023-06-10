import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
const update_data = async () => {
  //todo
  //데이터 삭제하기 or 수정하기 기능 구현필요
}


const DietListItem = ({time, data, image}) => {
  let dis_time = time.substring(0, 2) + ":" + time.substring(3, 5) + ""
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
        { image !== "" ?  <Image
                    style={styles.imageContainer}
                    source={{uri:image}}
                  /> : <></>
        }
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingVertical : 16,
    paddingHorizontal : 12,
    marginHorizontal : 21,
    marginBottom : 8,
    borderColor : '#BDBDBD',
    borderWidth : 1,
    borderRadius : 16,
    justifyContent : 'space-between',
    backgroundColor:"white",
    shadowColor: '#BDBDBD',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  time : {
    fontSize : 18,
    fontWeight:"500",
    paddingLeft : 10,
    textAlign : "left"
  },
  content : {
    marginVertical: 8,
    paddingLeft : 10,
    fontSize : 14
  },
  imageContainer:{
    width: 72, 
    height: 72, 
    resizeMode: 'cover' ,
    borderRadius: 14,
    marginHorizontal:16,
  }
});

export default DietListItem;