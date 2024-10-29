import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import localImages from "../../../assets";
import Button from "../../../components/Button";
import { colors } from "../../../../utils/colors";

const SplashScreen = () => {
  const handleSignUp = () => {
    console.log("Sign Up");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={localImages().ic_splash}></Image>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title={"Sign Up"} onPress={handleSignUp} />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 24,
    height: "100%",
  },

  image: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    marginVertical: 54,
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: "underline",
  },
  footerText: {
    color: colors.blue,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
});
