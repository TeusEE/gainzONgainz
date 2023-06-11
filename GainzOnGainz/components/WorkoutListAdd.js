import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

function WorkoutListAdd({ type, name, weight, count }) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={toggleVisibility}
        >
            <View style={styles.workTypeContainer}>
                <Text style={styles.workTypeText}>{type}</Text> {/* type prop 사용 */}
            </View>
            <Text style={styles.text}>{name}</Text> {/* name prop 사용 */}
            {isVisible && (
                <View style={styles.subInfoContainer}>
                    <Text style={styles.text}>{weight}KG</Text> {/* weight prop 사용 */}
                    <Text style={[styles.text, styles.lastText]}>{count}회</Text> {/* count prop 사용 */}
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    subInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
    },
    lastText: {
        marginLeft: 30
    },
    workTypeContainer: {
        width: 52,
        height: 25,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 36,
        borderStyle: 'solid',
        marginBottom: 8
    },
    workTypeText: {
        fontWeight: "600",
        textAlign: 'center',
        fontSize: 15
    }
});

export default WorkoutListAdd;
