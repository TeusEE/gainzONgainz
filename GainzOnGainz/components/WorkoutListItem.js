import React from "react";
import {Text, StyleSheet, View} from 'react-native';

function WorkoutListItem({type, name, weight, count}) {
    return (
        <View style={styles.container}>
            <View style={styles.workTypeContiner}>
                <Text style={styles.workTypeText}>가슴</Text>
            </View>
            <Text style={styles.text}>운동명</Text>
            <View style={styles.subInfoContainer}>
                <Text style={styles.text}>00KG</Text>
                <Text style={[styles.text && styles.lastText]}>00회</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    subInfoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        fontSize:15,
    },
    lastText:{
        marginLeft:30
    },
    workTypeContiner:{
        width: 52,
        height: 25,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 36,
        borderStyle: 'solid',
        marginBottom:8
    },
    workTypeText:{
        fontWeight:"600",
        textAlign: 'center',
        fontSize:15
    }
});

export default WorkoutListItem;