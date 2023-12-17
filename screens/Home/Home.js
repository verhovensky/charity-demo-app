import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import SingleDonationItem from '../../components/SingleDonation/SingleDonationItem';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.nickname} color={'#0A043C'} type={1} />
      <SingleDonationItem
        uri={
          'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
        }
        badgeTitle="Nature"
        donationTitle="Cactus"
        price={100}
      />
    </SafeAreaView>
  );
};

export default Home;
