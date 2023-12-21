import style from './style';
import {
  FlatList,
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
import {useSelector, useDispatch} from 'react-redux';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  console.log(categories);
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
        <View style={style.categoryHeader}>
          <Header type={2} title={'Selected Category'} color={'#0A043C'} />
        </View>
        <View style={style.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
