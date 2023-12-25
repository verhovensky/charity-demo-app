import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import Home from '../screens/Home/Home';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name={Routes.Home} component={Home} />
      <MainStack.Screen
        name={Routes.SingleDonation}
        component={SingleDonationItem}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
