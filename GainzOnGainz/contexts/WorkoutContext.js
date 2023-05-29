import React from 'react';
import { createContext, useState } from 'react';
import {format} from 'date-fns';
const WorkoutContext = createContext();

export const WorkoutContextProvider = ({children}) => {
    let workoutList=[];
    let today = new Date()
    const [workout, setWorkout] = useState(workoutList)
    const [workoutDate, setWorkoutDate] = useState(format(today, 'yyyy-MM-dd'))
    return (
        <WorkoutContext.Provider value = {{workout, setWorkout, workoutDate, setWorkoutDate}}>
            {children}
        </WorkoutContext.Provider>
    );
}

export default WorkoutContext;