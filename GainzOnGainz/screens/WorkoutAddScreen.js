import React, { useContext, useState} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity,ActionSheetIOS} from 'react-native';
import { Workout, WorkoutDetails } from '../object/workout';
import { FlatList } from 'react-native-gesture-handler';
import WorkoutAddListItem from '../components/workout/WorkoutAddListItem';
import WorkoutTypeModal from '../components/workout/WorkoutTypeModal';
import AsyncStorage from '@react-native-community/async-storage';
import asyncLoad from '../common/asyncStorage';
import WorkoutContext from '../contexts/WorkoutContext';

function WorkoutAddScreen({navigation}) {
  const {workoutDate, setWorkoutDate} = useContext(WorkoutContext);
  const [type, setType] = useState('상체');
  const [subType, setSubType] = useState('어깨');

  const [name, setName] = useState('');

  const [workoutDetail, setWorkoutDetail] = useState([new WorkoutDetails]);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [mainType, setMainType] = useState(true);

  const workoutType = ["상체","하체","유산소"];
  const workoutSubType = {
    "상체":[
      "어깨",
      "등",
      "가슴",
      "팔",
      "복부",
    ],
    "하체":[
      "엉덩이",
      "허벅지 앞",
      "허벅지 뒤",
      "허벅지 안",
      "종아리"
    ],
    "유산소":[
      "런닝머신",
      "자전거",
      "천국의 계단",
      "스텝머신",
      "일렉티컬",
      "기타"
    ]
  };

  const onTypePress = (isMainType) => {
    setMainType(isMainType);
    var typeData = isMainType ? workoutType : workoutSubType[type]

    if (Platform.OS === 'android') {
      setModalVisible(true);
      return;
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...typeData, '취소'],
        cancelButtonIndex: typeData.length,
      },
      (buttonIndex) => {
        if(buttonIndex != typeData.length){
          if(isMainType){
            setType(typeData[buttonIndex]);
            setSubType(workoutSubType[typeData[buttonIndex]][0]);
          }else{
            setSubType(typeData[buttonIndex]);
          }
        }
      },
    );
  };

  function onChange(text, title) {
    let dtails = workoutDetail;
    console.log(JSON.stringify(workoutDetail))
    switch (title) {
      case "무게":
        dtails[0].weight = Number.parseInt(text);
        break;
      case "횟수":
        dtails[0].number = Number.parseInt(text);
        break;
      case "휴식":
        dtails[0].rest = Number.parseInt(text);
        break;
    }

    setWorkoutDetail(dtails)
  };

  const onSave = async () => {
    var newWorkout = JSON.stringify(new Workout(
      { name:name,
        type:type, 
        subType:subType, 
        date:workoutDate, 
        workoutList:workoutDetail}
    ));

    let temp = await asyncLoad('workout')
    temp = JSON.parse(temp) ?? {}
    let pre_data = Object.keys(temp).includes(workoutDate) ? temp[workoutDate] : []
    let data_form = {
        ...temp,
        [workoutDate] : [
          ...pre_data,
          newWorkout
        ]
    }
    
    try {
      await AsyncStorage.setItem('workout', JSON.stringify(data_form));
      console.log("save complete")
      navigation.pop();
    } catch (e) {
      // 오류 예외 처리
      console.log(e)
    }
    console.log(JSON.stringify(data_form))
  };

  const addWorkoutDetail = () => {
    setWorkoutDetail([...workoutDetail, WorkoutDetails]);
  }

  return (
    <View style={styles.body}>
      <WorkoutTypeModal
        value = {mainType ? workoutType : workoutSubType[type]}
        visible={modalVisible}
        onClose={(workoutType) => {
          setModalVisible(false);
          if(workoutType != ''){
            if(mainType){
              setType(workoutType);
              setSubType(workoutSubType[workoutType][0]);
            }else{
              setSubType(workoutType);
            }
          }
        }}
      />
      <View style={styles.listView}>
        <TouchableOpacity onPress={() => navigation.pop()} >
          <Text style={styles.close}>닫기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave}>
          <View style={styles.saveView} >
            <Text style={styles.saveText}>저장</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatListItemSeperator/>
      <View style={styles.block}>
        <View style={styles.workoutGroupView}>
          <TouchableOpacity onPress={()=> onTypePress(true)}>
            <View style={styles.workoutGroup}>
              <Text style={styles.workoutGroupText}>{type}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> onTypePress(false)}>
            <View style={styles.workoutType}>
              <Text style={styles.workoutTypeText}>{subType}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TextInput 
            style={styles.workoutTitle}
            placeholder="운동명"
            onChangeText={setName}/>
        <View style={styles.separator}/>
        <FlatList
          data={workoutDetail}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={FlatListItemSeperator}
          renderItem={({item, index}) => (
            <WorkoutAddListItem onChange={onChange} value={item}/>
          )}
      />
        
        <TouchableOpacity onPress={addWorkoutDetail}>
        <View style={styles.addButtonView}>
          <Text style={styles.addButtonText}>세트 추가하기</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );

}

const FlatListItemSeperator = () => {
  return (
    <View style={styles.separator}/>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#FFF",
  },
  block: {
    flex:1,
    paddingHorizontal:25
  },
  separator:{
    width: "100%",
    textAlign: "center",
    borderWidth: 0.7,
    borderRadius: 36,
    borderStyle: 'solid',
    borderColor:"#E5E5E5"
  },
  listView : {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginVertical:18
  },
  saveView:{
    backgroundColor:"#000",
    borderRadius:50,
    paddingHorizontal:20,
    paddingVertical:8,
    marginHorizontal:25
  },
  saveText:{
    color:"#FFF",
    fontSize:16,
    fontWeight:"600"
  },
  close:{
    marginHorizontal:25,
  },
  workoutTitle:{
    fontSize:24,
    fontWeight:"600",
    marginVertical:20
  },
  workoutGroupView:{
    flexDirection: 'row',
    marginVertical:20
  },
  workoutGroup:{
    borderRadius:50,
    backgroundColor:"#FF7373",
    paddingVertical:4,
    paddingHorizontal:12
  },
  workoutGroupText:{
    color:"#FFF",
    fontSize:15,
    fontWeight:"600"
  },
  workoutType:{
    borderRadius:50,
    borderWidth: 1,
    borderRadius: 36,
    borderStyle: 'solid',
    paddingVertical:4,
    paddingHorizontal:12,
    marginHorizontal:8
  },
  workoutTypeText:{
    fontSize:15,
    fontWeight:"600"
  },
  addButtonView:{
    backgroundColor:"#F4F4F4",
    borderRadius:16,
    paddingVertical:24,
    marginVertical:30,
    alignItems:'center'
  },
  addButtonText:{
    color:"#BDBDBD",
    fontSize:15
  }
});

export default WorkoutAddScreen;
