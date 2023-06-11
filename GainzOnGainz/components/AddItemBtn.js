import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const AddItemBtn = ({onEvent}) => {
  return (
    <View style={styles.outer_block}>
      <Pressable onTouchStart={() => onEvent()}>
        <View style={styles.block}>
          <View style={styles.circleBlock}>
            <Text style={{fontSize: 20, color: 'white'}}>추가</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outer_block: {
    marginVertical: 16,
    marginHorizontal: 21,
  },
  circleBlock: {
    backgroundColor: '#DEDEDE',
    borderRadius: 30,
    padding: 10,
    marginVertical: 19,
  },
  block: {
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    borderRadius: 16,
  },
});

export default AddItemBtn;
