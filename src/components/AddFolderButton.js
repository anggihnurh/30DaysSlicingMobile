import { AddIcon } from '@assets/icons';
import { appTheme } from '@theme';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const AddFolderButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <AddIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: hp('2.5%'),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appTheme.colors.primary,
    position: 'absolute',
    bottom: '7%',
    right: '7%',
    zIndex: 10,
  },
});
