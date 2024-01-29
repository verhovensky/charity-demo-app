// @refresh reset

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
import {useEffect, useState} from 'react';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import Routes from '../../navigation/Routes';
import {resetToInitialState} from '../../redux/reducers/User';
import {logOut} from '../../api/user';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  // Donations
  const [donationItems, setDonationItems] = useState([]);
  useEffect(() => {
    const currentDonationItems = donations.donations;
    const filteredDonationItems = currentDonationItems.filter(item =>
      item.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(filteredDonationItems);
    console.log('filteredDonationItems', filteredDonationItems);
  }, [categories.selectedCategoryId, donations.donations]);
  // Categories
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;
  // Initially load categories
  useEffect(() => {
    console.log('Categories end reached');
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);
  // Pagination
  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  // Dispatch
  const dispatch = useDispatch();

  // TODO: use here in Badge component
  const donationItemCategoriesInformation = categories.categories.find(
    val => val.categoryId === categories.selectedCategoryId,
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroStyle}>Hello</Text>
            <View style={style.customMarginUsername} />
            <Header
              title={user.displayName + '☝️'}
              type={1}
              color={'#0A043C'}
            />
          </View>
          <View style={style.logoutAndImageContainer}>
            <Image
              source={{uri: user.profileImage}}
              resizeMode="contain"
              style={style.profileImage}
            />
            <Pressable
              style={style.logoutButton}
              onPress={async () => {
                dispatch(resetToInitialState());
                await logOut();
              }}>
              <Header title="Logout" color="white" type={3} />
            </Pressable>
          </View>
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlitedImageContainer} onPress={() => {}}>
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
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newCategories = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newCategories.length > 0) {
                setCategoryList(prev => [...prev, ...newCategories]);
                setCategoryPage(prev => prev + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
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
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(item => (
              <View style={style.donationItem} key={item.donationItemId}>
                <SingleDonationItem
                  badgeTitle={
                    categories.categories.filter(
                      val => val.categoryId === categories.selectedCategoryId,
                    )[0].name
                  }
                  onPress={() => {
                    dispatch(updateSelectedDonationId(item.donationItemId));
                    navigation.navigate(Routes.SingleDonation, {
                      donationItemId: item.donationItemId,
                      donationItemName: item.name,
                      donationItemPrice: item.price,
                      donationItemImage: item.image,
                      donationItemDescription: item.description,
                      donationItemCategories: donationItemCategoriesInformation,
                    });
                  }}
                  donationItemId={item.donationItemId}
                  donationTitle={item.name}
                  uri={item.image}
                  key={item.donationItemId}
                  price={parseFloat(item.price)}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
