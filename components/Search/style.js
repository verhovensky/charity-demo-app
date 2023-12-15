import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/scale';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: verticalScale(14),
    lineHeight: verticalScale(14),
    color: '#686C7A',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
  },
});

export default style;
