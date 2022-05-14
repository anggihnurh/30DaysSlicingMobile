import { FolderIcon, OptionFolderIcon } from '@assets/icons';
import { appTheme } from '@theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const FolderCard = ({ name, date, color }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: `${color.bg}29` }}>
      <View style={styles.content}>
        <View style={styles.header}>
          <FolderIcon cover={color.bg} inner={color.text} />
          <TouchableOpacity>
            <OptionFolderIcon fill={color.text} />
          </TouchableOpacity>
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{ ...styles.folderName, color: color.text }}>
          {name}
        </Text>
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
    padding: hp('2.3%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  folderName: {
    ...appTheme.text['normal-med'],
  },
  date: {
    ...appTheme.text['small-reg'],
  },
});
