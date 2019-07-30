import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

const imgData = [
    { id: 1, imgSource: require('../assets/upload_image_1.jpg') },
    { id: 2, imgSource: require('../assets/upload_image_2.jpg') },
    { id: 3, imgSource: require('../assets/upload_image_3.jpg') },
    { id: 4, imgSource: require('../assets/upload_image_4.jpg') },
    { id: 5, imgSource: require('../assets/upload_image_5.jpg') },
    { id: 6, imgSource: require('../assets/upload_image_6.jpg') }
];
const centerImgData = Math.floor(imgData.length / 2);

const ImageList = imageList => {
    return (
        <View style={{ flex: 0.85 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ flexDirection: 'column' }}>
                    {imgData.slice(0, centerImgData).map(item => {
                        return <Image source={item.imgSource}
                            style={styles.image} />
                    })}
                </View>
                <View style={{ flexDirection: 'column' }}>
                    {imgData.slice(centerImgData).map(item => {
                        return <Image source={item.imgSource}
                            style={styles.image} />
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: 165,
        height: 165,
        borderRadius: 20,
    },
});

export default ImageList;