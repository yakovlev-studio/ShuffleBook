import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import { wp } from "../../../../utils/utils";

const styles = StyleSheet.create({
  galleryButtonContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderTopWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    height: wp(16.6666667),
    width: "50%",
    backgroundColor: colors.white
  }
});

export default styles;
