import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import DietDateContext from '../contexts/DietDateContext';
const day_conv = ['일', '월', '화', '수', '목', '금', '토'];
const show_date = (date) => {
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);
  month = month.length === 1 ? '0' + month : month;
  let day = String(date.getDate());
  day = day.length === 1 ? '0' + day : day;
  let dayofweek = day_conv[date.getDay()];
  let hour = date.getHours()
  let minute = date.getMinutes()
  return `${year}년 ${month}월 ${day}일 (${dayofweek}) ${hour}:${minute}`;
};


const DietScreen = () => {
    const {dietdate} = useContext(DietDateContext)
    const [value, onChangeText] = useState(`식단을 입력하세요`)
    return (
        <>
            <View style = {styles.block1}>
                <View style = {styles.datestyle} >
                    <Text>{show_date(dietdate)}</Text>
                </View>
                <View style = {styles.buttonstyle}>
                    <Button title = "Save" onPress={()=>{}}/>
                </View>
            </View>
            <View style = {styles.block2}>
                <TextInput
                    editable
                    multiline
                    numberOfLines={7}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    style = {{textAlign : "left",textAlignVertical: 'top'}}
                />
            </View>
            <Text>
                카 메 라
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    block1: {
        backgroundColor : "white",
        height : 64,
        paddingHorizontal : 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-between',
    },
    datestyle : {
        height : 36,
        padding : 5,
        alignItems : "center",
        borderStyle : "solid",
        justifyContent : "center",        
        borderColor : "black",
        borderRadius : 16,
        borderWidth: 2
    },
    buttonstyle : {
        height : 36,
        alignItems : "center",
        borderRadius : 16,
    },
    block2 : {
        backgroundColor : "white",
        padding : 12
    }
});

export default DietScreen