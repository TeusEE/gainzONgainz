import React, {useContext} from 'react';
import {StyleSheet, Text, Pressable, FlatList, View} from 'react-native';
const day_conv = ['일', '월', '화', '수', '목', '금', '토'];
const show_date = (date, ddd) => {
  let year = String(date.getFullYear()).slice(2);
  let month = String(date.getMonth() + 1);
  month = month.length === 1 ? '0' + month : month;
  let day = String(date.getDate());
  day = day.length === 1 ? '0' + day : day;
  let dayofweek = day_conv[date.getDay()];
  //return `${year}/${month}/${day}/${dayofweek}`;
  if (month === "01" & day === "01"){
    if (ddd === "d"){
      return `${month}/${day}`
    } else if (ddd === "dow"){
      return `${dayofweek}`
    }    
  } else {
    if (ddd === "d"){
      return `${day}`
    } else if (ddd === "dow"){
      return `${dayofweek}`
    }
  }
};

const DrawerDataItem = ({item, change_dietdate}) => {
  const [day, dayofweek] = [show_date(item.dt, "d"), show_date(item.dt, "dow")]
  return (
    <Pressable onTouchStart={() => change_dietdate(item)}>
      <View style={item.focus ? [styles.date_normal, {borderWidth : 2}] : styles.date_normal}>
        <Text style={styles.text_dayofweek}>
          {dayofweek}
        </Text>
        <Text style={styles.text_day}>
          {day}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  date_normal : {
    padding : 3,
    paddingHorizontal : 12,
    fontSize: 16,
    color: 'black',
    alignItems : "center",
    borderStyle : "solid",
    justifyContent : "center",        
    borderColor : "black",
    borderRadius : 16,
    borderWidth: 0
  },
  text_dayofweek : {
    fontSize : 14,
    color : "black",
  },
  text_day : {
    fontSize : 16,
    color : "black",
  }
});

export default DrawerDataItem;
