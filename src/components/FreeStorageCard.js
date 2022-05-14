import { GDriveIcon, RightIcon } from '@assets/icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
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
              width={wp('15%')}
              height={hp('8%')}
              strokeWidth={5}
              radius={hp('3.5%')}
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
    marginVertical: hp('3%'),
    borderRadius: hp('3%'),
    padding: hp('3.5%'),
  },
  detailButton: {
    position: 'absolute',
    right: 0,
    padding: hp('3%'),
    borderTopRightRadius: hp('3%'),
    borderBottomLeftRadius: hp('3%'),
    backgroundColor: appTheme.colors.primary2,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: hp('1.8%'),
    alignSelf: 'flex-start',
    marginBottom: hp('0.5%'),
    borderRadius: hp('2%'),
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
    width: wp('15%'),
    height: hp('8%'),
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageStorage: {
    ...appTheme.text['normal-med'],
    position: 'absolute',
    color: 'white',
    // backgroundColor: 'red',
    height: hp('2.5%'),
  },
});
