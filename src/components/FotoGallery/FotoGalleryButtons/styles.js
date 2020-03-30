import { StyleSheet } from "react-native";
import { wp } from "../../../utils/utils";

const styles = StyleSheet.create({
  buttonsContainer: {
    zIndex: 110,
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    width: wp(33.33333)
  }
});

export default styles;
