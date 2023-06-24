import AsyncStorage from '@react-native-community/async-storage';

export default async function asyncLoad (storageName, debug = false) {
    try{
        const value = await AsyncStorage.getItem(storageName)
            .catch(error => {console.log(error)});
            
        if (debug){
            console.log(value)
        }
        return value
    } catch(e) {
        console.log(e)
    }
};