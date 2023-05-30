import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DietScreen from './DietScreen';
import WorkoutScreen from './WorkoutScreen';
import WorkoutAddScreen from './WorkoutAddScreen';

const stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <StackNavigator>
      <stack.Screen name="home" component={HomeScreen} />
      <stack.Screen name="diet" component={DietScreen} />
      <stack.Screen name="workout" component={WorkoutScreen} />
      <stack.Screen name="addworkout" component={WorkoutAddScreen} />
    </StackNavigator>
  );
};

export default StackNavigator;
