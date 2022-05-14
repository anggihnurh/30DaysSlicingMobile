import { SearchIcon } from '@assets/icons';
import { appTheme } from '@theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Searchbar = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <SearchIcon />
        <Text style={styles.placeholder}>Search Files</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 18,
    marginTop: hp('1%'),
    marginHorizontal: appTheme.padding.screen,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholder: {
    ...appTheme.text['normal-reg'],
    color: appTheme.colors.text3,
    marginLeft: 10,
  },
});
