import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

import { BASE_URL } from "./config";
import { Constants, showSnackBar, Messages, isNetworkConnected } from "src/utils";


const instance = axios.create({
  baseURI: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    AccessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS"
  }
});

getToken = async () => {
  return await AsyncStorage.getItem(Constants.StorageKey.TOKEN);
}


//instance.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;

/**
 * Request interceptor
 * Add Authorization header if it exists
 * This configuration applies for all requests
 */
instance.interceptors.request.use(async (reqConfig) => {

  const isInternet = await isNetworkConnected();

  if (!isInternet) return Promise.reject({
    response: {
      status: 111,
      message: Messages.intenetNotAvailable
    }
  });

  let accessToken = await AsyncStorage.getItem(Constants.StorageKey.TOKEN);
  if (accessToken) {
    reqConfig.headers = {
      Authorization: `Bearer ${accessToken}`
    };
  }
  console.log("Req", reqConfig);
  return reqConfig;

},
  error => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * Catch basic errors like 401 and redirect to login
 * This configuration applies for all responses
 */
instance.interceptors.response.use(
  response => {
    console.log("req response", response);
    return response.data;
  },
  error => {
    console.log("req error ", error.response);
    // Do something with response error
    if (typeof error === "undefined") {
      // request cancelled
      // when backend server is not available at all

      let serverError = {
        data: {
          message: Messages.serverError
        }
      };
      showSnackBar(Messages.serverError)
      return Promise.reject(serverError);
    } else if (typeof error.response === "undefined") {
      // when request is timeout
      let serverError = {
        data: {
          message: Messages.serverError
        }
      };
      showSnackBar(Messages.serverError)
      return Promise.reject(serverError);
    } else if (error.response.status === 401) {
      // apply refresh token logic here instead of redirecting to login
      //localStorage.clear();
      //sessionStorage.clear();

      if (error.response.data.meta)
        showSnackBar(error.response.data.meta.message)

    } else if (error.response.status === 111) {
      // internet not connected

      showSnackBar(error.response.message)

    } else {
      if (error.response.data.meta)
        showSnackBar(error.response.data.meta.message)
    }
    return Promise.reject(error.response);
  }
);

export default instance;
