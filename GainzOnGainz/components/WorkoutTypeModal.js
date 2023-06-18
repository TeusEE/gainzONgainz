import React from 'react';
import {StyleSheet, Modal, View, Pressable, Text,FlatList,TouchableOpacity} from 'react-native';

function WorkoutTypeModal({visible, onClose}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => onClose('')}>
      <Pressable style={styles.background} onPress={() => onClose('')}>
        <View style={styles.whiteBox}>
            <FlatList
                data={["상체","하체","유산소"]}
                renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => onClose(item)}
                      android_ripple={{color: '#eee'}}
                    >
                        <View style={styles.actionButton}>
                            <Text style={styles.actionText}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 2,
  },
  actionButton: {
    padding: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default WorkoutTypeModal;