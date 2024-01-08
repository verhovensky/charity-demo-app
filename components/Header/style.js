import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scalefontSize} from '../../styles/scale';

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Inter', '800'),
    lineHeight: scalefontSize(29),
    fontSize: scalefontSize(24),
  },
  title2: {
    fontFamily: getFontFamily('Inter', '600'),
    lineHeight: scalefontSize(22),
    fontSize: scalefontSize(18),
  },
  title3: {
    fontFamily: getFontFamily('Inter', '800'),
    lineHeight: scalefontSize(19),
    fontSize: scalefontSize(16),
  },
});

export default style;
