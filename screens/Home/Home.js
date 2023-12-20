import style from './style';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import SingleDonationItem from '../../components/SingleDonation/SingleDonationItem';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {useSelector} from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroStyle}>Hello</Text>
            <View style={style.customMarginUsername} />
            <Header
              title={user.firstName + ' ' + user.lastName[0] + '.☝️'}
              type={1}
              color={'#0A043C'}
            />
          </View>
          <Image
            source={{uri: user.profileImage}}
            resizeMode="contain"
            style={style.profileImage}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable
          style={style.highlitedImageContainer}
          onPress={() => {
            console.log('highlitedImage pressed');
          }}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
            style={style.highlitedImage}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
