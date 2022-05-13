import { GDriveIcon, RightIcon } from '@assets/icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { appTheme } from 'src/theme';

export const FreeStorageCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.detailButton}>
        <RightIcon />
      </TouchableOpacity>
      <View>
        <View style={styles.iconContainer}>
          <GDriveIcon />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Free Storage</Text>
            <Text style={styles.usedStorageText}>
              7,5 Gb / <Text style={styles.totalStorageText}>15 Gb</Text>
            </Text>
          </View>
          <View style={styles.chartContainer}>
            <ProgressChart
              data={{ data: [0.5] }}
              width={60}
              height={60}
              strokeWidth={5}
              radius={27}
              hideLegend
              chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
            />
            <Text style={styles.percentageStorage}>50%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.colors.primary,
    marginHorizontal: appTheme.padding.screen,
    marginVertical: 24,
    borderRadius: 26,
    padding: 32,
  },
  detailButton: {
    position: 'absolute',
    right: 0,
    padding: 22,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    backgroundColor: appTheme.colors.primary2,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    ...appTheme.text['large-semi'],
    color: 'white',
  },
  usedStorageText: {
    ...appTheme.text['normal-med'],
    color: 'white',
  },
  totalStorageText: {
    ...appTheme.text['normal-reg'],
  },
  chartContainer: {
    position: 'relative',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageStorage: {
    ...appTheme.text['normal-med'],
    position: 'absolute',
  },
});
