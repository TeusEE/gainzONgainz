import React, { useState } from 'react';
import { Text, StyleSheet, View, Modal, TouchableOpacity } from 'react-native';

function WorkoutListAddBody({ onClose }) {
  const [selectedType, setSelectedType] = useState('');
  const [selectedSubType, setSelectedSubType] = useState('');

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    setSelectedSubType('');
  };

  const handleSubTypeSelection = (subType) => {
    setSelectedSubType(subType);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeaderText}>운동 분위 선택</Text>

          <TouchableOpacity
            style={[styles.optionButton, selectedType === '상체' && styles.selectedOption]}
            onPress={() => handleTypeSelection('상체')}
          >
            <Text style={styles.optionButtonText}>상체</Text>
          </TouchableOpacity>

          {selectedType === '상체' && (
            <View>
              <TouchableOpacity
                style={[styles.subOptionButton, selectedSubType === '어깨' && styles.selectedSubOption]}
                onPress={() => handleSubTypeSelection('어깨')}
              >
                <Text style={styles.subOptionButtonText}>어깨</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  modalHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: 'green',
  },
  optionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subOptionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ccc',
    marginBottom: 5,
    borderRadius: 3,
    marginLeft: 5,
  },
  subOptionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 20,
  },
});

export default WorkoutListAddBody;
