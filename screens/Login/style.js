import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scalefontSize,
  verticalScale,
} from '../../styles/scale';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: horizontalScale(24),
  },
  marginBottom24: {
    marginBottom: horizontalScale(24),
  },
  getRegistered: {
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scalefontSize(16),
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: verticalScale(24),
  },
  success: {
    color: 'green',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scalefontSize(16),
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: verticalScale(24),
  },
});

export default style;
