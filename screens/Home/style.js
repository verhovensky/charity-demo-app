import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/scale';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroStyle: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: verticalScale(16),
    lineHeight: verticalScale(19),
    color: '#636776',
  },
  customMarginUsername: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  highlitedImageContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  highlitedImage: {
    width: '100%',
    height: verticalScale(160),
  },
});

export default style;
