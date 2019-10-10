import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions, NavigationActions} from 'react-navigation';
import PasswordHelp from './PasswordHelp';
import LoginForm from './LoginForm';
import Style from './styles';
import {Constants} from 'src/utils';
import Routes from 'src/router/routes';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      attempts: 1,
      subComponent: 'LoginForm',
      userProfile: {},
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeSubComponent = this.changeSubComponent.bind(this);
  }

  /* FUNCTIONS */

  saveUser = async userResponse => {
    try {
      await AsyncStorage.setItem(
        Constants.StorageKey.USER,
        JSON.stringify(this.state),
      );
      await AsyncStorage.setItem(
        Constants.StorageKey.TOKEN,
        userResponse.token,
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  loadUser = async () => {
    try {
      // console.log("is this working?");
      const jsonSavedUser = await AsyncStorage.getItem(
        Constants.StorageKey.USER,
      );
      const savedUser = JSON.parse(jsonSavedUser);
      if (savedUser !== null) {
        this.setState({
          username: savedUser.username,
          password: savedUser.password,
          userProfile: savedUser.profile,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  getSubComponent() {
    if (this.state.subComponent === 'LoginForm') {
      return (
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleSubmit={this.handleSubmit}
          changeSubComponent={this.changeSubComponent}
        />
      );
    } else if (this.state.subComponent === 'PasswordHelp') {
      return (
        <PasswordHelp
          changeSubComponent={this.changeSubComponent}
          handleEmailChange={this.handleEmailChange}
          //add request new password functionality
        />
      );
    }
  }

  changeSubComponent(name) {
    this.setState({subComponent: name});
  }

  handleEmailChange(email) {
    this.setState({username: email, attempts: 1});
  }

  handlePasswordChange(password) {
    this.setState({password: password});
  }

  handleSubmit = () => {
    const params = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.authWatcher(
      params,
      response => {
        this.setState({userProfile: response.data});
        this.saveUser(response.data);
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({routeName: Routes.AUTHENTICATED}),
            ],
            key: null,
          }),
        );
      },
      error => {
        console.log('error : ', error);
        if (error.data && error.data.detail === 'Username doesnt exist.') {
          Alert.alert(
            'Alert Title',
            'Username does not exist.',
            [{text: 'OK'}],
            {
              cancelable: false,
            },
          );
        } else if (
          //if the username is right but pass is wrong, under 5 attempts
          error.data &&
          error.data.detail ===
            'The password you entered does not match our records.Please try again!!' &&
          this.state.attempts < 5
        ) {
          Alert.alert('Alert Title', error.data.detail, [{text: 'OK'}], {
            cancelable: false,
          });
          this.state.attempts++;
        } else if (
          //if the username is right but pass is wrong, over5 attempts
          error.data &&
          error.data.detail ===
            'The password you entered does not match our records.Please try again!!' &&
          this.state.attempts >= 5
        ) {
          Alert.alert(
            'Alert Title',
            'Do you want to reset your password?',
            [
              {
                text: 'Try Again',
                style: 'cancel',
              },
              {
                text: 'Change Password',
                onPress: () => this.changeSubComponent('PasswordHelp'),
              },
            ],
            {
              cancelable: false,
            },
          );
          this.state.attempts++;
        }
      },
    );
  };

  /* LIFECYCLE */
  componentDidMount() {
    this.loadUser();
  }

  /* COMPONENT */
  render() {
    return (
      <ImageBackground
        source={require('bcg_frontend/assets/images/BG.png')}
        style={styles.loginScreenContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('bcg_frontend/assets/images/apolloLogo.png')}
          />
        </View>
        {this.getSubComponent()}
        <ActivityIndicator
          style={{flex: 1}}
          size="large"
          color="white"
          animating={this.props.authReducer.authLoader}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* NOTES
- load font
- discuss api responces/spelling with BE devs
*/
