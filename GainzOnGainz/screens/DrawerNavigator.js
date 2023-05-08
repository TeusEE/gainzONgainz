import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DietScreen from './DietScreen';
import WorkoutScreen from './WorkoutScreen';
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
        component={DietScreen}
        options={{title: '식단'}}
      />
      <drawer.Screen
        name="workout"
        component={WorkoutScreen}
        options={{title: '운동'}}
      />
    </drawer.Navigator>
  );
};

export default DrawerNavigator;
