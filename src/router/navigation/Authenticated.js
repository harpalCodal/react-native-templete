import Routes from 'src/router/routes';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AntIcons from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from 'src/screens/Home';
import Radar from 'src/screens/Radar';
import Product from 'src/screens/Product';
import History from 'src/screens/History';
import Contact from 'src/screens/Contact';

const TabNavigator = createBottomTabNavigator(
  {
    [Routes.HOME]: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <AntIcons name={'bars'} size={25} color={tintColor} />
        ),
      },
    },
    [Routes.RADAR]: {
      screen: Radar,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <AntIcons name={'upcircleo'} size={25} color={tintColor} />
        ),
      },
    },
    [Routes.PRODUCT]: {
      screen: Product,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <MaterialIcons name={'inbox'} size={25} color={tintColor} />
        ),
      },
    },
    [Routes.HISTORY]: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <FontistoIcons name={'history'} size={25} color={tintColor} />
        ),
      },
    },
    [Routes.CONTACT]: {
      screen: Contact,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <SimpleLineIcons name={'bubble'} size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#1DB677',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
