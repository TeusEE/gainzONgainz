import React from 'react';
import { createContext, useState } from 'react';


const DietDateContext = createContext();

export const DietDateContextProvider = ({children}) => {
    const [dietdate, setDietdate] = useState(new Date())
    return (
        <DietDateContext.Provider value = {{dietdate, setDietdate}}>
            {children}
        </DietDateContext.Provider>
    )
}

export default DietDateContext;