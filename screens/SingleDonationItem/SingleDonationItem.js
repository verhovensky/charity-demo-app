import {View, Text} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const SingleDonationItem = props => {
  const DonationitemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log(DonationitemInformation);
  return (
    <View>
      <Text>Single Donation Item</Text>
    </View>
  );
};

export default SingleDonationItem;
