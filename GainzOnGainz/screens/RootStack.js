import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();

const StackNavigator = () =>{
    return (
        <StackNavigator>
            <stack.Screen name="home" component={HomeScreen}/>
            <stack.Screen name="diet" component={DietScreen}/>
            <stack.Screen name="workout" component={WorkoutScreen}/>
        </StackNavigator>
    );
}

export default StackNavigator;