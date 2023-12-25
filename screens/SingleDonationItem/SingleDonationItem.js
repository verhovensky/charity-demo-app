import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import BackButton from '../../components/BackButton/BackButton';

const SingleDonationItem = props => {
  const DonationitemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log(DonationitemInformation);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView style={style.container}>
        <BackButton onPress={() => props.navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
