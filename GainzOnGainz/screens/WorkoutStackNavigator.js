import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutAddScreen from './WorkoutAddScreen';
import WorkoutScreen from './WorkoutScreen';
import { WorkoutContextProvider } from '../contexts/WorkoutContext';
  

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <WorkoutContextProvider>
            <Stack.Navigator initialRouteName='workout'>
                <Stack.Screen options = {{headerShown: false}} name="workout" component={WorkoutScreen} />
                <Stack.Screen options = {{ headerShown: false }} name="add" component={WorkoutAddScreen} />
            </Stack.Navigator>
        </WorkoutContextProvider>
    );
}

export default StackNavigator