import { Platform } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Snackbar from 'react-native-snackbar';

import Color from "./color";
import Dimension from "./dimensions";
import CommonStyle from "./styles";
import validate, { PasswordValidate } from "./validate";
import Constants from "./constants";
import DateFormat from "./dateFormat";
import Messages from "./message";

const showSnackBar = message => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    action: {
      title: "",
      color: Color.WHITE
    },
    backgroundColor: Color.PRIMARY
  });
};

const isNetworkConnected = async () => {
  return await NetInfo.isConnected.fetch();
};

export {
  Color,
  Dimension,
  CommonStyle,
  validate,
  Constants,
  DateFormat,
  isNetworkConnected,
  showSnackBar,
  PasswordValidate,
  Messages
};
