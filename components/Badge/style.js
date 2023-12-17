import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scalefontSize,
  verticalScale,
} from '../../styles/scale';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    borderRadius: horizontalScale(50),
    height: verticalScale(22),
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scalefontSize(10),
    lineHeight: scalefontSize(12),
    textAlign: 'center',
  },
});

export default style;
