import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DietStackNavigator from './DietStackNavigator';
import WorkoutStackNavigator from './WorkoutStackNavigator';
import HomeScreen from './HomeScreen';

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <drawer.Navigator initialRouteName="home">
      <drawer.Screen
        name="home"
        component={HomeScreen}
        options={{title: '홈'}}
      />
      <drawer.Screen
        name="diet"
        component={DietStackNavigator}
        options={{title: '식단'}}
      />
      <drawer.Screen
        name="workout"
        component={WorkoutStackNavigator}
        options={{title: '운동'}}
      />
    </drawer.Navigator>
  );
};

export default DrawerNavigator;
