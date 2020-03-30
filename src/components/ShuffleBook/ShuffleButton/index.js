import React from 'react';
import {View} from 'react-native';
import GradientButton from '../../UI/GradientButton';
import styles from './styles';
import * as actions from '../../../store/shuffleBook/actions';

// Redux
import {useDispatch} from 'react-redux';

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const handleShuffleButtonPressed = () =>
    dispatch(actions.snapPhotoTemplate());

  return (
    <View style={styles.shuffleButtonContainer}>
      <GradientButton
        onPressed={handleShuffleButtonPressed.bind(this)}
        customStyles={{
          customButtonSize: styles.shuffleButton,
          sizeOfTitleOfShuffleButton: styles.shuffleButtonSize,
        }}
        title="S"
      />
    </View>
  );
};

export default ShuffleButton;
