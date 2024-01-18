import {useSelector} from 'react-redux';
import {MainNavigation, NonAuthenticatedNavigation} from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector(state => state.user);
  if (user.isLoggedIn) {
    return <MainNavigation />;
  } else {
    return <NonAuthenticatedNavigation />;
  }
};

export default RootNavigation;
