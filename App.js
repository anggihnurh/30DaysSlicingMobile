import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {logo} from './src/assets/images/index';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;
