import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text, Pressable, Modal} from 'react-native';
const update_data = async () => {
  //todo
  //Modal까지는 완료. 모달에서 버튼 눌렀을때 Data수정, 삭제 기능 만들기
};

const DietListItemCrudModal = ({visible, visible_setter}) => {
  const onClose = () => {
    visible_setter(false)
  }
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <Pressable style={styles.background} onPress={onClose}>
        <View style={styles.whiteBox}>
          <Pressable
            style={styles.actionButton}
            android_ripple={{color: '#eee'}}>
            <Text style={styles.actionText}>수정하지</Text>
          </Pressable>
          <Pressable
            style={styles.actionButton}
            android_ripple={{color: '#eee'}}>
            <Text style={[styles.actionText, {color : "red"}]}>삭제하기</Text>
          </Pressable>
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

export default DietListItemCrudModal;
