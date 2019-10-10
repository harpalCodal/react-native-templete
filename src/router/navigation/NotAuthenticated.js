import {createStackNavigator} from 'react-navigation-stack';
import Login from 'src/screens/Login';
import Routes from 'src/router/routes';
import {configureHeader} from '../routerStyles';

export default createStackNavigator(
  {
    [Routes.LOGIN]: {
      screen: Login,
      navigationOptions: configureHeader('Login'),
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
