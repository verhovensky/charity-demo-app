import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scalefontSize,
  verticalScale,
} from '../../styles/scale';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    marginTop: horizontalScale(10),
    marginHorizontal: horizontalScale(20),
  },
  image: {
    width: '100%',
    borderRadius: horizontalScale(15),
    height: verticalScale(240),
    marginTop: horizontalScale(12),
    marginBottom: horizontalScale(24),
  },
  badge: {
    marginBottom: horizontalScale(10),
  },
  description: {
    marginTop: horizontalScale(7),
    marginBottom: verticalScale(12),
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scalefontSize(14),
    lineHeight: verticalScale(16),
    color: '#686C7A',
  },
  donateButton: {
    marginHorizontal: horizontalScale(12),
  },
});

export default style;
