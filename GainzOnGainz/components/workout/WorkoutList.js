import React, { useContext, useEffect, useState } from "react";
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import WorkoutListItem from "./WorkoutListItem";
import { FlatList } from "react-native-gesture-handler";
import {format} from 'date-fns';
import WorkoutContext from "../../contexts/WorkoutContext";
import asyncLoad from "../../common/asyncStorage";


function WorkoutList() {
    const {workout, workoutDate} = useContext(WorkoutContext);
    const [dayWorkout, setDayWorkout] = useState([]);
    
    useEffect(() => {
        async function getWorkout() { 
            let workout = await asyncLoad("workout", debug = false)
            let convertData = [];
            if(workout != null){
                convertData = JSON.parse(workout)[workoutDate] ?? []
            }
            setDayWorkout(convertData);
        }
        getWorkout(); 
    }, [workout, workoutDate]) 

    const onLongPress = () => {
        console.log("asd");
    };



    return (
        <View>
            <View style={styles.dateLineContainer}>
                <Separator/>
                <Text style={styles.dateText}>{format(new Date(workoutDate), "E, M월 dd")}</Text>
            </View>
            { dayWorkout != undefined && dayWorkout.length > 0 ? 
                (
                    <FlatList
                            data={dayWorkout}
                            renderItem={({item}) => {
                                let parseWorkout = JSON.parse(item);
                                return (
                                    <TouchableOpacity onLongPress={onLongPress}>
                                        <View style={styles.listContiner}>
                                            <View style={styles.typeContiner}>
                                                <Text style={styles.workText}>
                                                    {parseWorkout.type}
                                                </Text>
                                            </View>
                                            <WorkoutListItem value={parseWorkout}/>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                )
                : <EmptyList/>
            }
        </View>
    )
}

const EmptyList = () => (
    <Text style={styles.emptyList}>활동 내역이 없습니다{"\n"}버튼을 통해 추가해주세요</Text>
);

export const Separator = () => (
    <View style={styles.separator}/>
);

const styles = StyleSheet.create({
    listContiner:{
        marginHorizontal:26,
        marginBottom:16,
    },
    separator:{
        width: "100%",
        textAlign: "center",
        borderWidth: 0.7,
        borderRadius: 36,
        borderStyle: 'solid',
        borderColor:"#E5E5E5"
    },
    dateLineContainer:{
        marginBottom:36,
        marginTop:36,
        alignItems:'center'
    },
    dateText:{
        position : 'absolute',
        bottom:-8, 
        paddingHorizontal:20,
        backgroundColor:"#FFF",
        color:"#BDBDBD"
    },
    typeContiner:{
        width: 52,
        height: 25,
        justifyContent: 'center',
        borderRadius: 36,
        backgroundColor:"#FF7373",
        marginBottom:16
    },
    workText:{
        fontWeight:"600",
        textAlign: 'center',
        color:"#FFFFFF",
        fontSize:15
    },
    emptyList:{
        color:"#BDBDBD",
        textAlign: 'center',
    },
});


export default WorkoutList;