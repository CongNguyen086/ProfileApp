import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ExtraInfo = extraInfo => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{extraInfo.content}</Text>
            <Text style={styles.title}>{extraInfo.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        color: 'black',
        fontSize: 25,
    },
    title: {
        color: '#c3bdbe',
        fontSize: 15,
    },
});

export default ExtraInfo;