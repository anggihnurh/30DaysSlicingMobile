import { FilterRightIcon } from '@assets/icons';
import { appTheme } from '@theme';
import { useView } from '@utils';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { FolderCard } from './FolderCard';

export const Folders = ({ headerHeight }) => {
  const { windowHeight } = useView();
  const colors = [
    { bg: '#4378DB', text: '#405DB5' },
    { bg: '#FDCD55', text: '#F0A714' },
    { bg: '#F35555', text: '#AB3F3F' },
    { bg: '#28A164', text: '#228955' },
  ];
  const [data] = useState([
    { name: 'Web Design', date: '20 Dec 2020' },
    { name: 'App Design', date: '21 Dec 2020' },
    { name: 'Font Collections', date: '22 Dec 2020' },
    { name: 'Illustrations', date: '23 Dec 2020' },
    { name: 'Pattern', date: '24 Dec 2020' },
    { name: 'My Portofolio', date: '25 Dec 2020' },
    { name: 'Web Design', date: '20 Dec 2020' },
    { name: 'App Design', date: '21 Dec 2020' },
  ]);

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.header}>
        <Text style={styles.title}>My Folders</Text>
        <FilterRightIcon />
      </View>
      <View style={{ height: windowHeight - (headerHeight + 20) }}>
        <FlatGrid
          data={data}
          spacing={16}
          renderItem={({ item, index }) => {
            return (
              <FolderCard
                key={Math.random()}
                date={item.date}
                name={item.name}
                color={colors[index % 4]}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderTopStartRadius: 20,
    backgroundColor: 'white',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: appTheme.padding.screen,
  },
  title: {
    ...appTheme.text['medium-semi'],
    color: appTheme.colors.text2,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
