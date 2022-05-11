import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    color: '#000',
  },
});
