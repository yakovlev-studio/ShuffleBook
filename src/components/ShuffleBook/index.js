import React from 'react';
import {View} from 'react-native';
import FotoGallery from '../FotoGallery';
import FotoSpreadsSlider from '../FotoSpreadsSlider';
import ShuffleButton from './ShuffleButton';
import styles from './styles';
import Draggable from '../Draggable';

const ShuffleBook = props => {
  return (
    <View style={styles.container}>
      <Draggable>
        <FotoSpreadsSlider />

        <ShuffleButton />
        <FotoGallery />
      </Draggable>
    </View>
  );
};

export default ShuffleBook;
