import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileInfo from './components/ProfileInfo';
import ExtraInfoWrapper from './components/ExtraInfoWrapper';
import ImageList from './components/ImageList';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBtn}>
          <Ionicons name="md-arrow-back" size={30} color="#c3bdbe" />
        </View> 
        <View style={styles.headerBtn}>
          <Feather name="menu" size={30} color="#c3bdbe" />
        </View>
      </View>

      <ProfileInfo avatar={require('../Week_02/assets/avatar.png')}
                  name='Cong Nguyen'
                  job='React Native' />
      <ExtraInfoWrapper></ExtraInfoWrapper>
      <ImageList></ImageList>
      <View style={styles.footer}>
        <View style={styles.footerBtn}>
          <Foundation name="home" size={30} color="#c3bdbe" />
        </View>
        <View style={styles.footerBtn}>
          <Feather name="plus-square" size={30} color="#c3bdbe" />
        </View>
        <View style={styles.footerBtn}>
          <Ionicons name="md-person" size={30} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    marginTop: 10,
  },
  headerBtn: {
    width: 340,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerBtn: {
    flex: 1,
    alignItems: 'center',
  },
});
