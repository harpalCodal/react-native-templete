import React from "react-native";
import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const relativeWidth = num => (DEVICE_WIDTH * num) / 100;
const relativeHeight = num => (DEVICE_HEIGHT * num) / 100;


export default {
    relativeWidth,
    relativeHeight
};