import { FolderIcon, OptionFolderIcon } from '@assets/icons';
import { appTheme } from '@theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export const FolderCard = ({ name, date, color }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: `${color.bg}29` }}>
      <View style={styles.content}>
        <View style={styles.header}>
          <FolderIcon cover={color.text} inner={color.bg} />
          <TouchableOpacity>
            <OptionFolderIcon />
          </TouchableOpacity>
        </View>
        <Text style={{ ...styles.folderName, color: color.text }}>{name}</Text>
        <Text style={{ ...styles.date, color: color.bg }}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  folderName: {
    ...appTheme.text['normal-med'],
    marginBottom: 8,
  },
  date: {
    ...appTheme.text['small-reg'],
  },
});
