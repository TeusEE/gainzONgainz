import React, { useContext } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import DietDateContext from '../contexts/DietDateContext';

const DrawerDate = () => {
  const {dietdate, setDietdate} = useContext(DietDateContext)
  const temp_dt = [dietdate,dietdate,dietdate,dietdate]
    return (
      <View style={styles.block}>
        <FlatList
          data = {temp_dt}
          horizontal= {true}
          renderItem={(item)=>{
            return (
              <Pressable onTouchStart={()=>console.log("hello")}>
                <Text style = {styles.test_text}>{dietdate.toDateString()}</Text>
              </Pressable>
            )
          }}

        />        
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