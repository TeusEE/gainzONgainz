import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {format} from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DietDateContext from '../contexts/DietDateContext';


const TimePicker = ({mode, visible, settimepickMode, settimepickVisible}) => {
    const {dietdate, setDietdate} = useContext(DietDateContext);
    const onConfirm = (date, _mode) => {    
        if (_mode == "date"){
            settimepickVisible(false)
            setDietdate(date)
            settimepickMode("time")
            settimepickVisible(true)
        } else {
            setDietdate(date)
            settimepickMode("date")
            settimepickVisible(false)
        }
    }
    return (
        <>
            <DateTimePickerModal 
                isVisible={visible}
                mode={mode}
                onConfirm={(date) => onConfirm(date, mode)}
                onCancel={() => settimepickVisible(false)}
                date={dietdate} 
            />
        </>
    )
}


const styles = StyleSheet.create({
});
  
export default TimePicker;
  