import React, { useContext, useState } from "react";
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

function ImagePickerItem({context}) {
    const {image, setImage} = useContext(context);

    const onPress = () => {        
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false
          }).then(imageInfo => {
            setImage(imageInfo.path);
            console.log(imageInfo);
          }).catch(error => {console.log(error)});
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.borderContainer}>
                { image == '' ? <Text>카메라</Text> :
                    <Image
                    style={styles.imageContainer}
                    source={{uri:image}}
                  />
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    borderContainer:{
        width: 72,
        height:72,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 14,
        borderStyle: 'solid',
    },
    imageContainer:{
        width: 72, 
        height: 72, 
        resizeMode: 'cover' ,
        borderRadius: 14,
    }
});

export default ImagePickerItem;