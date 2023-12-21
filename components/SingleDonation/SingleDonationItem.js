// @refresh reset

import style from './style';
import {View, Pressable, Image} from 'react-native';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';
import PropTypes from 'prop-types';

const SingleDonationItem = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={style.containerBadge}>
        <Badge title={props.badgeTitle} />
      </View>
      <View style={style.containerDonationInfo}>
        <Image source={{uri: props.uri}} style={style.image} />
        <Header
          title={props.donationTitle}
          type={2}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <Header
          title={'$' + parseFloat(props.price).toFixed(2)}
          type={2}
          color={'#156CF7'}
        />
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;
