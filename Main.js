import React, {Component} from 'react';
import {View} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import Routes from './src/router/routes';
import {Constants} from 'src/utils';

export default class Main extends Component {
  async componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    let userToken = await AsyncStorage.getItem(Constants.StorageKey.TOKEN);
    setTimeout(() => {
      let routeName = Routes.NOT_AUTHENTICATED;
      // if (userToken) {
      //   routeName = Routes.AUTHENTICATED;
      // }
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: routeName})],
          key: null,
        }),
      );
    }, 500);
  }

  render() {
    return <View />;
  }
}
