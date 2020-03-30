import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import colors from '../../../constants/colors';

const GradientButton = ({
  onPressed = f => f,
  customStyles = {},
  title = '',
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        onPress={onPressed}
        style={[styles.button, customStyles.customButtonSize]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1.0, y: 0}}
          colors={colors.gradient}
          style={[styles.linearGradient, customStyles.customButtonSize]}>
          <Text
            style={[
              styles.textButton,
              customStyles.sizeOfTitleOfShuffleButton,
            ]}>
            {title}
          </Text>
        </LinearGradient>
      </TouchableHighlight>
    </View>
  );
};

export default GradientButton;
