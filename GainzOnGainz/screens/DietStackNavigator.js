import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DietScreen from './DietScreen';
import DietAddScreen from './DietAddScreen';
import { DietDateContextProvider } from '../contexts/DietDateContext';
  

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <DietDateContextProvider>
            <Stack.Navigator initialRouteName='Diet'>
                <Stack.Screen options = {{headerShown: false}} name="Diet" component={DietScreen} />
                <Stack.Screen name="Add" component={DietAddScreen} />
            </Stack.Navigator>
        </DietDateContextProvider>
    );
}

export default StackNavigator