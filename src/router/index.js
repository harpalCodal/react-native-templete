import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import NavNotAuthenticated from './navigation/NotAuthenticated';
import Authenticated from './navigation/Authenticated';
import Routes from 'src/router/routes';
import Main from '../../Main';

const AppNavigator = createStackNavigator(
  {
    [Routes.MAIN]: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    [Routes.NOT_AUTHENTICATED]: {
      screen: NavNotAuthenticated,
      navigationOptions: {
        header: null,
      },
    },
    [Routes.AUTHENTICATED]: {
      screen: Authenticated,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerVisible: false,
      gesturesEnabled: false,
    },
  },
);

export default createAppContainer(AppNavigator);
