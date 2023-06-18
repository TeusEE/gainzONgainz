import React, { useContext } from "react";
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';
import WorkoutContext from "../contexts/WorkoutContext";
const get_date_aysnc = () => {
  //todo
  const markedDates = {
    '2023-05-17': {
      marked: true,
    },
    '2023-05-18': {
      marked: true,
    },
    '2023-05-19': {
      marked: true,
    },
    '2023-05-23': {
      marked: true,
    },
  };
  return markedDates 
}


function CalendarView() {
  const {workoutDate, setWorkoutDate} = useContext(WorkoutContext)
  let test_date = get_date_aysnc()
  let is_marked_date = (Object.keys(test_date).includes(workoutDate))
  let workoutDateMarking = is_marked_date ? {marked : is_marked_date} : {}
  test_date = {
    ...test_date,
    [workoutDate] : {
      selected:true,
      ...workoutDateMarking
    }
  }  
  return(
    <Calendar
      markedDates = {test_date}
      onDayPress = {(day) => {
        setWorkoutDate(day.dateString)
      }}
      theme = {{
        selectedDayBackgroundColor: '#020204',
        arrowColor: '#020204',
        dotColor: '#009688',
        todayTextColor: '#8F00FF',
      }}
    />
  )
}

export default CalendarView;