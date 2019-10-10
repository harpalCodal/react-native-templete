// this is a subComponent of Login

import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from "react-native";

export default class PasswordHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* FUNCTIONS */

  /* LIFECYCLE */

  /* COMPONENT */
  render() {
    // console.log('this is the props', this.props)
    return (
      <View style={styles.loginFormContainer}>
        <TextInput
          style={styles.textField}
          placeholder="  EMAIL ADDRESS"
          onChangeText={this.props.handleEmailChange}
          value={this.props.username}
        />
        <TextInput
          style={styles.textField}
          placeholder="  PASSWORD"
          onChangeText={this.props.handlePasswordChange}
          value={this.props.password}
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.handleSubmit}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableHighlight>
        <View style={styles.helpContainer}>
          <Text style={styles.text} onPress={this.requestAccess}>
            Request Accesss
          </Text>
          <Text style={styles.text}> | </Text>
          <TouchableHighlight
            onPress={() => this.props.changeSubComponent("PasswordHelp")}
          >
            <Text style={styles.text}>Password Help</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginFormContainer: {
    flex: 1,
    alignItems: "center"
  },
  helpContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  textField: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 5,
    marginBottom: 15,
    width: "90%"
  },
  button: {
    width: "90%",
    backgroundColor: "#1DB677",
    borderRadius: 50,
    height: 40,
    marginBottom: 15,
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  text: {
    color: "white"
  }
});
