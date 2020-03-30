import React from 'react';
import {TouchableOpacity} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import ShuffleBookContext from '../../../../contexts/ShuffleBookContext';
import {renderPlatformSpecificIcon} from '../../../../utils/utils';
import styles from './styles';

const FotoGalleryButton = ({icon = {}, buttonStyles = {}}) => {
  const navigateToPhotoEditorScreen = fn =>
    alert('Screen changed to PhotoEditorScreen');

  return (
    <ShuffleBookContext.Consumer>
      {({onNavigateToImageBrowser, onNavigateToPhotoEditor}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              return icon.name === 'add'
                ? onNavigateToImageBrowser()
                : navigateToPhotoEditorScreen(onNavigateToPhotoEditor);
            }}
            style={[styles.galleryButtonContainer, buttonStyles]}>
            {/* <Ionicons
              name={renderPlatformSpecificIcon(icon.name)}
              color={icon.color}
              size={40}
            /> */}
          </TouchableOpacity>
        );
      }}
    </ShuffleBookContext.Consumer>
  );
};

export default FotoGalleryButton;
