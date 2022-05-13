import {
  AddFolderButton,
  Folders,
  FreeStorageCard,
  HomeHeader,
  Searchbar,
} from '@components';
import { appTheme } from '@theme';
import { useView } from '@utils';
import React from 'react';
import { StatusBar, View } from 'react-native';

export const HomePage = () => {
  const { getView, view } = useView();
  return (
    <View style={{ backgroundColor: appTheme.colors.background }}>
      <StatusBar
        backgroundColor={appTheme.colors.background}
        barStyle="dark-content"
      />
      <View onLayout={getView}>
        <HomeHeader />
        <Searchbar />
        <FreeStorageCard />
      </View>
      <Folders headerHeight={view.height} />
      <AddFolderButton />
    </View>
  );
};
