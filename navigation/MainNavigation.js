import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import Home from '../screens/Home/Home';

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name={Routes.Home} component={Home} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
