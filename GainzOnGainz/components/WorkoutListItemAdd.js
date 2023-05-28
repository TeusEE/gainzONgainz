import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

function WorkoutListItem({ type, name, weight, count }) {
    const [isVisible, setIsVisible] = useState(false); // isVisible 상태 추가

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={toggleVisibility} // TouchableOpacity를 클릭하면 toggleVisibility 함수 호출
        >
            <View style={styles.workTypeContainer}>
                <Text style={styles.workTypeText}>{type}</Text> {/* type prop 사용 */}
            </View>
            <Text style={styles.text}>{name}</Text> {/* name prop 사용 */}
            {isVisible && ( // isVisible 상태에 따라 컴포넌트 표시 여부 결정
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
        backgroundColor: '#ccc', // 회색 배경 추가
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

export default WorkoutListItem;
