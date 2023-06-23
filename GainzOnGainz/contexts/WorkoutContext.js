import React from 'react';
import { createContext, useState } from 'react';
import {format} from 'date-fns';
import { Workout } from '../object/workout';
const WorkoutContext = createContext();

export const WorkoutContextProvider = ({children}) => {
    let today = new Date()
    const [image, setImage] = useState('')
    const [workout, setWorkout] = useState([Workout])
    const [workoutDate, setWorkoutDate] = useState(format(today, 'yyyy-MM-dd'))
    return (
        <WorkoutContext.Provider value = {{
            image, setImage,
            workout, setWorkout, 
            workoutDate, setWorkoutDate}}>
            {children}
        </WorkoutContext.Provider>
    );
}

export default WorkoutContext;