import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import DietDateContext from '../contexts/DietDateContext';
import {format} from 'date-fns';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePickerItem from '../components/ImagePicker';

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


const async_load = async (debug = false) => {
    try{
        const value = await AsyncStorage.getItem("dietdata")
        if (debug){
            console.log(value)
        }
        return value
    } catch(e) {
        console.log(e)
    }
    
}

const async_save = async (day, data,image, navi) => {
    let temp = await async_load()
    temp = JSON.parse(temp)??{}
    _date = format(day, "yyyy-MM-dd")
    _time = format(day, "HH:mm:ss")
    let pre_data = Object.keys(temp).includes(_date) ? temp[_date] : {}  
    let data_form = {
        ...temp,
        [_date] : {
            ...pre_data,
            [_time] : {
                "food" : data,
                "photo" : image,
            },
        }
    }
    
    try {
      await AsyncStorage.setItem('dietdata', JSON.stringify(data_form));
      console.log("save complete")
      navi.navigate("Diet")
    } catch (e) {
      // 오류 예외 처리
      console.log(e)
    }
}

const async_clear = async () => {
    try{
        await AsyncStorage.clear()
        console.log("clear async_storage complete")
    } catch (e) {
        console.log(e)
    }
}


const DietScreen = ({navigation}) => {
    const {dietdate, image} = useContext(DietDateContext)
    const [value, onChangeText] = useState(`식단을 입력하세요`)
    return (
        <>
            <View style = {styles.block1}>
                <View style = {styles.datestyle} >
                    <Text>{show_date(dietdate)}</Text>
                </View>
                <View style = {styles.buttonstyle}>
                    <Button title = "see_data" onPress={()=>async_load(debug = true)}/>
                </View>

                <View style = {styles.buttonstyle}>
                    <Button title = "Save" onPress={()=>async_save(dietdate,value,image,navigation)}/>
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
            <View style={styles.footer}>
                <ImagePickerItem context={DietDateContext}/>
            </View>
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
    },
    footer:{
        height: 120,
        paddingLeft: 20,
        backgroundColor:"#FFF"
    }
});

export default DietScreen