import style from './style';
import {View, Text, Image} from 'react-native';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';
import PropTypes from 'prop-types';

const SingleDonationItem = props => {
  return (
    <View>
      <View style={style.containerBadge}>
        <Badge title={props.badgeTitle} />
      </View>
      <View style={style.containerDonationInfo}>
        <Image source={{uri: props.uri}} style={style.image} />
        <Header title={props.donationTitle} type={1} color={'#0A043C'} />
        <Header
          title={'$' + props.price.toFixed(2)}
          type={2}
          color={'#156CF7'}
        />
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
