import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Diet} from '../Diet/recommendDiet';

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 16,
    marginHorizontal: 21,
  },
  infoBox: {
    maxWidth: 85,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryWrap: {
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#E2E2E2',
    width: 85,
    height: 85,
    borderRadius: 10,
    marginBottom: 8,
    marginTop: 4,
    overflow: 'hidden',
    maxWidth: 85,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nameText: {},
});

export default function Recommend() {
  const [dietList, setDietList] = useState({
    meatRecommendDiet: {},
    vegRecommendDiet: {},
    seaFoodRecommendDiet: {},
  });

  useLayoutEffect(() => {
    const randomMeatIndex = Math.floor(Math.random() * Diet.meat.length);
    const randomVegIndex = Math.floor(Math.random() * Diet.vegetable.length);
    const randomSeafoodIndex = Math.floor(Math.random() * Diet.seaFood.length);
    const meatRecommendDiet = Diet.meat[randomMeatIndex];
    const vegRecommendDiet = Diet.vegetable[randomVegIndex];
    const seaFoodRecommendDiet = Diet.seaFood[randomSeafoodIndex];
    setDietList({
      meatRecommendDiet,
      vegRecommendDiet,
      seaFoodRecommendDiet,
    });
    console.log(dietList);
  }, []);

  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>추천 메뉴</Text>
      <View style={styles.category}>
        <View style={styles.infoBox}>
          <Text>채식</Text>
          <View style={styles.box}>
            {dietList.vegRecommendDiet.path ? (
              <Image
                source={dietList.vegRecommendDiet.path}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={require('../assets/images/vegatable.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            )}
          </View>
          {dietList.vegRecommendDiet.name ? (
            <Text style={styles.nameText}>
              {dietList.vegRecommendDiet.name}
            </Text>
          ) : (
            <Text>로딩중입니다.</Text>
          )}
        </View>
        <View style={styles.infoBox}>
          <Text>육류</Text>
          <View style={styles.box}>
            {dietList.meatRecommendDiet.path ? (
              <Image
                source={dietList.meatRecommendDiet.path}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={require('../assets/images/meat.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            )}
          </View>
          {dietList.meatRecommendDiet.name ? (
            <Text>{dietList.meatRecommendDiet.name}</Text>
          ) : (
            <Text>로딩중입니다.</Text>
          )}
        </View>
        <View style={styles.infoBox}>
          <Text>해산물</Text>
          <View style={styles.box}>
            {dietList.seaFoodRecommendDiet.path ? (
              <Image
                source={dietList.seaFoodRecommendDiet.path}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={require('../assets/images/seafood.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            )}
          </View>
          {dietList.seaFoodRecommendDiet.name ? (
            <Text>{dietList.seaFoodRecommendDiet.name}</Text>
          ) : (
            <Text>로딩중입니다.</Text>
          )}
        </View>
      </View>
    </View>
  );
}
