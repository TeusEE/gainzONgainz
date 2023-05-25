import React from 'react';
import { createContext, useState } from 'react';


const WorkoutContext = createContext();

export const WorkoutContextProvider = ({children}) => {
    let workoutList=[];

    const [workout, setWorkout] = useState(workoutList)

    return (
        <WorkoutContext.Provider value = {{workout, setWorkout}}>
            {children}
        </WorkoutContext.Provider>
    );
}

export default WorkoutContext;