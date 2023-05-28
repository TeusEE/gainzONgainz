import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [memoText, setMemoText] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const saveMemo = () => {
    // 여기에 메모를 저장하거나 다른 작업을 수행
    console.log('메모 저장:', memoText);
    setMemoText('');
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <Icon name="plus" size={20} color="#FFF" />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="메모를 입력하세요"
            onChangeText={text => setMemoText(text)}
            value={memoText}
            autoFocus
          />

          <TouchableOpacity style={styles.saveButton} onPress={saveMemo}>
            <Icon name="save" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#888',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 4,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
});

export default App;
