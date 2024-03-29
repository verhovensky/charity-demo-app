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
  categories: {
    marginHorizontal: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(12),
  },
  categoryHeader: {
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
    marginHorizontal: horizontalScale(24),
  },
  donationItemsContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  donationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(5),
  },
  logoutButton: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(40),
    marginTop: horizontalScale(10),
    padding: horizontalScale(10),
    alignItems: 'center',
  },
  logoutAndImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default style;
