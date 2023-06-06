import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import DietDateContext from '../contexts/DietDateContext';
import DrawerDataListItem from './DrawerDateListItem';

const VerticalSep = () => {
  return <View style={{padding: 10, width: 3}} />;
};

let temp_dt = new Array(20).fill('');
temp_dt = temp_dt.map((val, index) => {
  let temp_date = new Date() - 1000 * 60 * 60 * 24 * index;
  let _focus =
    Math.abs((temp_date - new Date()) / 1000) < 60 * 60 * 24 * 0.5
      ? true
      : false;
  return {
    dt: new Date(temp_date),
    focus: _focus,
  };
});

const DrawerDateList = () => {
  const {dietdate, setDietdate} = useContext(DietDateContext);
  const [dietdatelist, setDietdatalist] = useState(temp_dt);
  const change_dietdate = props => {
    setDietdate(props.dt);
  };
  useEffect(() => {
    let next_temp_dt = dietdatelist.map((val, idx) => {
      let _focus =
        Math.abs((val.dt - dietdate) / 1000) < 60 * 60 * 24 * 0.5
          ? true
          : false;
      return {
        dt: val.dt,
        focus: _focus,
      };
    });
    setDietdatalist(next_temp_dt);
  }, [dietdate]);
  return (
    <View style={styles.block}>
      <FlatList
        data={dietdatelist}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={VerticalSep}
        renderItem={({item}) => (
          <DrawerDataListItem item={item} change_dietdate={change_dietdate} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
});

export default DrawerDateList;
