import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scalefontSize,
  verticalScale,
} from '../../styles/scale';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(50),
    height: verticalScale(50),
    justifyContent: 'center',
    margin: verticalScale(15),
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inactiveTitle: {
    color: '#79869F',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scalefontSize(14),
    lineHeight: scalefontSize(17),
    textAlign: 'center',
  },
});

export default style;
