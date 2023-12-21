import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/scale';

const style = StyleSheet.create({
  container: {},
  image: {
    borderRadius: horizontalScale(12),
    resizeMode: 'cover',
    width: horizontalScale(155),
    height: verticalScale(170),
  },
  containerBadge: {
    position: 'absolute',
    zIndex: 10,
    top: verticalScale(10),
    left: horizontalScale(10),
  },
  containerDonationInfo: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
