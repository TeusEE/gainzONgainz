import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {format} from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DietDateContext from '../contexts/DietDateContext';
//todo
//setDietdate implement


const TimePicker = ({mode, visible, settimepickMode, settimepickVisible}) => {
    const {dietdate, setDietdate} = useContext(DietDateContext);
    const onConfirm = (_mode) => {
        if (mode == "date"){
            settimepickVisible(false)
            settimepickMode("time")
            settimepickVisible(true)
        } else {
            settimepickVisible(false)
            settimepickMode("date")
        }
    }
    return (
        <>
            <DateTimePickerModal 
                isVisible={visible}
                mode={mode}
                onConfirm={() => onConfirm(mode)}
                onCancel={() => settimepickVisible(false)}
                date={dietdate} 
            />
        </>
    )
}


const styles = StyleSheet.create({
    block: {
      width : "100%",
      justifyContent : "center"
    },
    emptyList:{
      color:"#BDBDBD",
      textAlign: 'center',
    },
  });
  
  export default TimePicker;
  