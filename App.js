import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/router';
import configureStore from './src/store';
const store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
