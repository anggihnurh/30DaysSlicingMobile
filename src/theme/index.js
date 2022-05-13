import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const appTheme = {
  padding: {
    screen: 16,
  },
  text: {
    'small-reg': {
      fontFamily: 'Poppins-Regular',
      fontSize: hp('2%'),
      // lineHeight: 16.8,
      letterSpacing: -0.24,
    },
    'normal-reg': {
      fontFamily: 'Poppins-Regular',
      fontSize: hp('2.3%'),
      // lineHeight: 19.2,
      letterSpacing: -0.24,
    },
    'normal-med': {
      fontFamily: 'Poppins-Medium',
      fontSize: hp('2.3%'),
      lineHeight: 19.2,
      letterSpacing: -0.24,
    },
    'normal-semi': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: hp('2.3%'),
      letterSpacing: -0.24,
    },
    'medium-semi': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: hp('2.7%'),
      letterSpacing: -0.24,
    },
    'large-semi': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: hp('3.2%'),
      letterSpacing: -0.24,
    },
  },
  colors: {
    text1: '#383A44',
    text2: '#21205A',
    text3: '#7C809E',
    primary: '#4378DB',
    primary2: '#405DB5',
    secondary: '#FDCD55',
    secondary2: '#F0A714',
    tertiary: '#28A164',
    tertiary2: '#228955',
    'accent-red': '#F35555',
    'accent-red2': '#AB3F3F',
    background: '#F2F5F8',
  },
};

export { appTheme };
