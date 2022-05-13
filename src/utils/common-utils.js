import { useState } from 'react';
import { Dimensions } from 'react-native';

export function useView() {
  const [view, setView] = useState({
    width: 0,
    height: 0,
  });
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const getView = e => {
    const { height, width } = e.nativeEvent.layout;
    setView({
      height,
      width,
    });
  };

  return { view, windowHeight, windowWidth, getView };
}
