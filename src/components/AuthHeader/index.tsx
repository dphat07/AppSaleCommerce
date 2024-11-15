import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import localImages from "../../assets";
import { colors } from "../../../utils/colors";
interface AuthHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image style={styles.image} source={localImages().ic_back}></Image>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 16,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: "500",
    paddingHorizontal: 16,
  },
});
