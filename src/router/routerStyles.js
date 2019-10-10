import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Color} from 'src/utils';

const configureHeader = title => {
  return {
    title: title,
    headerBackground: (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Color.RED_GRADIENT, Color.ORANGE_GRADIENT]}
        style={{flex: 1}}
      />
    ),
    headerTintColor: Color.WHITE,
    headerTitleStyle: {
      fontWeight: 'bold',
      color: Color.WHITE,
    },
  };
};

export {configureHeader};
