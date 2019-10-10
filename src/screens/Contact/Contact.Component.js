import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import Style from './styles';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{marginTop: 80}}>Contact screen!</Text>
      </View>
    );
  }
}
