import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DietScreen from './DietScreen';
import DietAddScreen from './DietAddScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Diet'>
        <Stack.Screen name="Diet" component={DietScreen} />
        <Stack.Screen name="Add" component={DietAddScreen} />
      </Stack.Navigator>
    );
}

export default StackNavigator