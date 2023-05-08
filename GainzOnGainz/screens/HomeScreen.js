import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.block}>
      <Button
        title="식단 화면 이동"
        onPress={() => navigation.navigate('diet')}
      />
      <Button
        title="운동 화면 이동"
        onPress={() => navigation.navigate('workout')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default HomeScreen;
