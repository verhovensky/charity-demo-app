import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import Home from '../screens/Home/Home';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import Login from '../screens/Login/Login';

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.Login}>
      <MainStack.Screen name={Routes.Home} component={Home} />
      <MainStack.Screen
        name={Routes.SingleDonation}
        component={SingleDonationItem}
      />
      <MainStack.Screen name={Routes.Login} component={Login} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
