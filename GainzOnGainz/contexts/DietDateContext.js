import React from 'react';
import { createContext, useState } from 'react';


const DietDateContext = createContext();

export const DietDateContextProvider = ({children}) => {
    let temp = new Date()
    const [dietdate, setDietdate] = useState(temp)
    return (
        <DietDateContext.Provider value = {{dietdate, setDietdate}}>
            {children}
        </DietDateContext.Provider>
    )
}

export default DietDateContext;