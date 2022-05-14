import { MenuIcon } from '@assets/icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { appTheme } from '@theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <MenuIcon />
      <Text style={styles.title}>My Drive</Text>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/41033113?v=4' }}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: appTheme.padding.screen,
  },
  title: {
    ...appTheme.text['medium-semi'],
    color: appTheme.colors.text2,
  },
  avatar: {
    width: wp('12%'),
    height: hp('6.2%'),
    borderRadius: 100,
  },
});
