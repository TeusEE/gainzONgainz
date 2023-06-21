import React, { useContext, useEffect } from "react";
import {Text, StyleSheet, View} from 'react-native';
import WorkoutListItem from "./WorkoutListItem";
import { FlatList } from "react-native-gesture-handler";
import WorkoutContext from "../../contexts/WorkoutContext";
import asyncLoad from "../../common/asyncStorage";

function WorkoutList() {
    const {workout, setWorkout} = useContext(WorkoutContext);
    
    useEffect(() => {
        async function getWorkout() { 
            let workout = await asyncLoad("workout", debug = false)
            setWorkout(workout);
        }
        getWorkout(); 
    }, [workout]) 


    return (
        <View>
            <View style={styles.dateLineContainer}>
                <Separator/>
                <Text style={styles.dateText}>일, 3월 25</Text>
            </View>
            { workout != undefined && workout.length > 0 ? 
                (
                    <View style={styles.listContiner}>
                        <View style={styles.workContiner}>
                            <Text style={styles.workText}>상체</Text>
                        </View>
                        <FlatList
                            data={workout}
                            renderItem={({item}) => (
                                <WorkoutListItem />
                            )}
                        />
                    </View>
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
        flex:1,
        marginHorizontal:26,
        marginBottom:16
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
    workContiner:{
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