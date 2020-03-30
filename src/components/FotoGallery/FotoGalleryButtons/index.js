import React from "react";
import { View } from "react-native";
import colors from "../../../constants/colors";

import FotoGalleryButton from "./FotoGalleryButton";
import styles from "./styles";

const FotoGalleryButtons = () => {
  return (
    <View style={styles.buttonsContainer}>
      <FotoGalleryButton icon={{ name: "add", color: colors.primary }} />
      <FotoGalleryButton
        icon={{ name: "checkmark", color: colors.white }}
        buttonStyles={{ backgroundColor: colors.lightGrey }}
      />
    </View>
  );
};

export default FotoGalleryButtons;
