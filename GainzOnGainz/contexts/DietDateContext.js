import React from 'react';
import { createContext, useState } from 'react';


const DietDateContext = createContext();

export const DietDateContextProvider = ({children}) => {
    let temp = new Date()
    const [image, setImage] = useState('')
    const [dietdate, setDietdate] = useState(temp)
    return (
        <DietDateContext.Provider value = {{dietdate, setDietdate,image, setImage}}>
            {children}
        </DietDateContext.Provider>
    )
}

export default DietDateContext;