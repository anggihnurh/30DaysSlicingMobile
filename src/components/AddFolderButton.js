import { AddIcon } from '@assets/icons';
import { appTheme } from '@theme';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export const AddFolderButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <AddIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
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
