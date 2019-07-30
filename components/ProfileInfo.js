import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const ProfileInfo = profileInfo => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarWrapper}>
                <Image style={styles.avatar}
                    source={profileInfo.avatar}
                    resizeMode='cover'
                />
            </View>

            <View style={styles.infoWrapper}>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{profileInfo.name}</Text>
                    <Text style={styles.job}>{profileInfo.job}</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => alert("Followed")}>
                        <View style={[styles.button, styles.followBtn]}>
                            <Text style={styles.label}>Follow</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("Message sended")}>
                        <View style={[styles.button, styles.sendBtn]}>
                            <Feather name="send" size={20} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    avatarWrapper: {
        flex: 0.3,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    infoWrapper: {
        flex: 0.7,
        justifyContent: 'space-between',
    },
    userInfo: {
        flex: 1,
        justifyContent: 'space-between',
    },
    name: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    job: {
        color: '#c3bdbe',
        fontSize: 15,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    button: {
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    followBtn: {
        backgroundColor: FOLLOW_COLOR,
        width: 100,
        marginRight: 10,
    },
    sendBtn: {
        backgroundColor: SEND_MESSAGE_COLOR,
        width: 60,
    },
    label: {
        color: '#fff',
    },
});

export default ProfileInfo;