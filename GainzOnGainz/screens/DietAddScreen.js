import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import DietDateContext from '../contexts/DietDateContext';
import {format} from 'date-fns';
import ImagePickerItem from '../components/ImagePicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Separator } from '../components/workout/WorkoutList';
import AsyncStorage from '@react-native-community/async-storage';
import asyncLoad from '../common/asyncStorage';
import TimePicker from '../components/TimePicker'

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


const async_save = async (day, data,image, navi) => {
    let temp = await asyncLoad("dietdata")
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


const DietScreen = ({navigation}) => {
    const {dietdate, image} = useContext(DietDateContext)
    const [value, onChangeText] = useState(``)
    const [timepick_mode, settimepickMode] = useState('date'); // 모달 유형
    const [timepick_visible, settimepickVisible] = useState(false); // 모달 노출 여부

    return (
        <View style={styles.mainBlock}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.pop()} >
                    <Text style={styles.close}>닫기</Text>
                    </TouchableOpacity>
                    <View style = {styles.headerRow}>
                        <TouchableOpacity onPress={() => settimepickVisible(true)}>
                            <View style = {styles.datestyle} >
                                <Text>{show_date(dietdate)}</Text>
                            </View>
                        </TouchableOpacity>
                        <Button title = "see_data" onPress={()=>asyncLoad("dietdata",debug = true)}/>
                

                        <TouchableOpacity
                            onPress={()=>async_save(dietdate,value,image,navigation)}>
                                <View style = {styles.buttonstyle}>
                                    <Text style = {styles.buttonText}>저장</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Separator/>
                <View style = {styles.block2}>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={7}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder='식단을 입력하세요'
                        style = {{textAlign : "left",textAlignVertical: 'top'}}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <ImagePickerItem context={DietDateContext}/>
            </View>

            <TimePicker
                mode = {timepick_mode}
                visible = {timepick_visible}
                settimepickMode = {settimepickMode}
                settimepickVisible = {settimepickVisible}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainBlock:{
        flex:1,
        backgroundColor : "white",
        justifyContent : 'space-between',
    },
    header: {
        paddingHorizontal : 24,
        paddingVertical:12
    },
    headerRow:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent : 'space-between',
    },
    datestyle : {
        alignItems : "center",
        borderStyle : "solid",
        justifyContent : "center",        
        borderColor : "black",
        fontSize:16,
        fontWeight:"500",
        paddingHorizontal : 11,
        paddingVertical:4,
        borderRadius : 16,
        borderWidth: 1
    },
    buttonstyle : {
        alignItems : "center",
        backgroundColor:"black",
        borderRadius : 16,
        paddingHorizontal:21,
        paddingVertical:6
    },
    buttonText:{
        color:"white",
        fontSize:16,
        fontWeight:"600"
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