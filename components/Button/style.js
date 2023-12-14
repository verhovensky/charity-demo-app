import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scalefontSize,
  verticalScale,
} from '../../styles/scale';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(50),
    height: verticalScale(55),
    justifyContent: 'center',
    margin: verticalScale(15),
  },
  buttonDisabled: {
    backgroundColor: '#D8D8D8',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scalefontSize(16),
    lineHeight: scalefontSize(19),
    textAlign: 'center',
  },
});

export default style;
