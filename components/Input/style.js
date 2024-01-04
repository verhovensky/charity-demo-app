import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scalefontSize, verticalScale} from '../../styles/scale';

const style = StyleSheet.create({
  input: {
    paddingVertical: verticalScale(12),
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
  label: {
    paddingTop: verticalScale(12),
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: verticalScale(12),
    lineHeight: scalefontSize(15),
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
});

export default style;
