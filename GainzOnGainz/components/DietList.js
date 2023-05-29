import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {format} from 'date-fns';
import DietDateContext from '../contexts/DietDateContext';
import DietListItem from './DietListItem';


const HorizontalSep = () => {
  return <View style={{padding: 10}} />;
};

const DietList = () => {
  const {dietdate, setDietdate} = useContext(DietDateContext);
  const temp_dt = {
    "22:22:22" : "no food :(",
    "22:22:23" : "no food ::("
  }
  const [dis_data, setDis_data] = useState(temp_dt)
  const async_load = async (date, debug = false) => {
    try{
      const value = await AsyncStorage.getItem("dietdata")
      const real_value = JSON.parse(value)[format(date, "yyyy-MM-dd")]??{"22:22:22" : "no food :("} 
      if (debug){
          console.log(real_value)
      }
      setDis_data(real_value)
    } catch(e) {
      setDis_data({"22:22:22" : "no food :("})
      console.log(e)
    }  
  }
  useEffect(() => {
    async_load(dietdate, debug = false)
  }, [dietdate])
  return (
    <View style={styles.block}>
      <FlatList
        data={Object.keys(dis_data)}
        ItemSeparatorComponent={HorizontalSep}
        renderItem={({item}) => {
          return (
              <DietListItem time = {item} data = {dis_data[item]}/>
            )
          }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
  },
});

export default DietList;
