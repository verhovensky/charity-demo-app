import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {useSelector} from 'react-redux';
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const DonationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.donationItemCategories;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          style={style.image}
          source={{uri: route.params.donationItemImage}}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header
          title={DonationItemInformation.name}
          type={1}
          color={'#0A043C'}
        />
        <Text style={style.description}>
          {DonationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.donateButton}>
        <Button title={'Donate'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
