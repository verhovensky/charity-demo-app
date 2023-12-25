import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../styles/scale';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: horizontalScale(10),
  },
});

export default style;
