import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExtraInfo from './ExtraInfo';

const data = [
    {
        id: 1,
        content: '4',
        title: 'Photos',
    },
    {
        id: 2,
        content: '1.2k',
        title: 'Followers',
    },
    {
        id: 3,
        content: '600',
        title: 'Following',
    },
];

const ExtraInfoWrapper = extraInfoWrapper => {
    return (
        <View style={styles.container}>
            {data.map(item => {
                return (
                    <View key={item.id}>
                        <ExtraInfo content={item.content}
                                    title={item.title}/>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ExtraInfoWrapper;