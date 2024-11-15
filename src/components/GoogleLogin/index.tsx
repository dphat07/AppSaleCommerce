import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import React from "react";
import localImages from "../../assets";
import { colors } from "../../../utils/colors";
interface GoogleLoginProps {
  onPress?: () => void;
  style?: object;
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.6}
    >
      <Image style={styles.image} source={localImages().ic_google}></Image>
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 14,
    width: "45%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom:50
  },
  image: {
    width: 30,
    height: 30,
  },
});
