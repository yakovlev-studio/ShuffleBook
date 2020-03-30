import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export default ({style, children}) => {
  return <View style={[styles.fotoFrameContainer, style]}>{children}</View>;
};
