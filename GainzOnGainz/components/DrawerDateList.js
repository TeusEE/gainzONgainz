import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import DietDateContext from '../contexts/DietDateContext';
const day_conv = ['일', '월', '화', '수', '목', '금', '토'];
const show_date = (date) => {
  let year = String(date.getFullYear()).slice(2, )
  let month = String(date.getMonth()+ 1)
  month = month.length === 1? "0" + month : month 
  let day = String(date.getDate())
  day = day.length === 1? "0" + day : day 
  let dayofweek = day_conv[date.getDay()]
  return `${year}/${month}/${day}/${dayofweek}`
}

const VerticalSep = () => {
  return (
    <View
      style = {{
        padding: 10,
        width: 3,
      }}
    />
  )
}




const DrawerDateList = () => {
  const {dietdate, setDietdate} = useContext(DietDateContext)
  let temp_dt = new Array(20).fill("")
  temp_dt = temp_dt.map((val, index) => {
    let temp_date = new Date() - 1000*60*60*24*index
    let _focus = Math.abs((temp_date-dietdate)/1000)<60*60*24*0.5 ? true : false
    return {
      dt : new Date(temp_date),
      focus : _focus
    } 
  })
  const [dietdatelist, setDietdatalist] = useState(temp_dt)
  const change_dietdate = (props) => {
    setDietdate(props.item.dt)
  }

  useEffect(() => {
    let next_temp_dt = dietdatelist.map((val, idx) => {
      let _focus = Math.abs((val.dt-dietdate)/1000)<60*60*24*0.5 ? true : false
      return {
        dt : val.dt,
        focus : _focus
      }
    })
    setDietdatalist(next_temp_dt)
  }, [dietdate])
    return (
      <View style={styles.block}>
        <FlatList
          data = {dietdatelist}
          horizontal= {true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent = {VerticalSep}
          renderItem={(item)=>{
            if (item.item.focus === true){
              return (
                <Pressable onTouchStart={()=>change_dietdate(item)}>
                  <Text style = {styles.test_text_focus}>{show_date(item.item.dt)}</Text>
                </Pressable>
              )
            } else {
              return (
                <Pressable onTouchStart={()=>change_dietdate(item)}>
                  <Text style = {styles.test_text}>{show_date(item.item.dt)}</Text>
                </Pressable>
              )
            }
            
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
      color : "gray"
    },
    test_text_focus : {
      fontSize : 16,
      color : "black"
    }
  });
  
  export default DrawerDateList;