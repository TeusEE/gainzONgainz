import React from "react";
import {Text, StyleSheet, View} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

function WorkoutListItem({value}) {
    return (
        <>
            <View style={styles.block}>
                <View style={styles.labelBlock}>
                    <View style={styles.label}>
                        <Text style={styles.workTypeText}>{value.subType}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{value.name}</Text>
                    <FlatList
                        data={value.workoutList}           
                        renderItem={({item}) => {
                            return (
                                <View style={styles.subInfoContainer}>
                                    <Text style={styles.text}>{item.weight}KG</Text>
                                    <Text style={[styles.text && styles.lastText]}>
                                        {item.number}회
                                    </Text>
                                    <Text style={[styles.text && styles.lastText]}>
                                        {item.rest}초
                                    </Text>
                                </View>
                            );
                        }}
                    />            
                </View>
            </View>
            <View style={styles.separator}/>
        </>
    )
}

const styles = StyleSheet.create({
    block:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom:8
    },
    separator:{
        marginTop:6,
        width: "100%",
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor:"#E5E5E5"
    },
    subInfoContainer:{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: 10
    },
    textContainer:{
        flex:1,
        flexDirection: 'row',
        marginLeft:20,
        marginTop:4
    },
    text:{
        fontSize:15,
    },
    lastText:{
        width:45,
        marginLeft:10,
        textAlign:'right'
    },
    label:{
        alignSelf: 'flex-start',
        height: 25,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 36,
        borderStyle: 'solid',
        paddingHorizontal:12
    },
    labelBlock:{
        width:100,
    },
    workTypeText:{
        fontWeight:"600",
        textAlign: 'center',
        fontSize:15
    }
});

export default WorkoutListItem;