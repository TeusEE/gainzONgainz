import React, { useContext } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
const day_conv = ['일', '월', '화', '수', '목', '금', '토'];
const show_date = (date) => {
  let year = String(date.getFullYear()).slice(2, )
  let month = String(date.getMonth()+ 1)
  month = month.length === 1? "0" + month : month 
  let day = String(date.getDate())
  day = day.length === 1? "0" + day : day 
  let dayofweek = day_conv[date.getDay()]
  return `${year}/${month}/${day}/${dayofweek}`
}

const DrawerDataItem = ({item, change_dietdate}) => {
  return (
    <Pressable onTouchStart={()=>change_dietdate(item)}>
      <Text style = {item.focus ? styles.test_text_focus : styles.test_text}>{show_date(item.dt)}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    test_text:{
      fontSize : 16,
      color : "gray"
    },
    test_text_focus : {
      fontSize : 16,
      color : "black"
    }
  });

export default DrawerDataItem;