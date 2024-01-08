import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../styles/scale';

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
});

export default style;
