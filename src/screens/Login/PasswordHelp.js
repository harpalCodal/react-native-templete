// this is a sub-component of Login

import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  Linking
} from "react-native";

export default class PasswordHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* FUNCTIONS */
  handleSubmit() {
    console.log("submitted");
  }
  /* LIFECYCLE */

  /* COMPONENT */
  render() {
    return (
      <View style={styles.passwordHelpContainer}>
        <Text
          style={[styles.text, { fontWeight: "bold", marginTop: -50 }]}
        >{`RESET YOUR PASSWORD
        `}</Text>

        <Text style={styles.text}>
          {`We'll send a password reset link to
your email. Still need help? Contact us at`} </Text><TouchableHighlight onPress={() => Linking.openURL('mailto:apollo-support@fmc.com?subject=Assistance with the Apollo App&body=body')}>
<Text style={[styles.text, {textDecorationLine: 'underline', marginTop: -3}]}>{`apollo-support@fmc.com

`}</Text>
</TouchableHighlight>
        <TextInput
          style={styles.textField}
          placeholder="  EMAIL ADDRESS"
          onChangeText={this.handleEmailChange} //
          value={this.state.email}
        />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>REQUEST NEW PASSWORD</Text>
        </TouchableHighlight>
        <View style={styles.helpContainer}>
          <Text style={styles.text} onPress={this.requestAccess}>
            Request Accesss
          </Text>
          <Text style={styles.text}> | </Text>
          <TouchableHighlight
            onPress={() => this.props.changeSubComponent("LoginForm")}
          >
            <Text style={styles.text}>Log In</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  passwordHelpContainer: {
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
    color: "white"
  },
  text: {
    color: "white",
    textAlign: "center"
  }
});
