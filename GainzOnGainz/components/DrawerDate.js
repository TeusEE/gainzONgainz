import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DrawerDate = () => {
    return (
      <View style={styles.block}>
        <Text style = {styles.test_text}>DrawerDate!</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    block: {
        flexDirection : "row",
        padding : 16,
        alignItems : "center",
        backgroundColor : "cyan",
    },
    test_text:{
        fontSize : 16,
        color : "black"
    }
  });
  
  export default DrawerDate;