import { View, StyleSheet, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { memo, useState } from "react";
import { colors } from "../../../../utils/colors";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = () => {
  const onSignUp = () => {
    console.log("Sign Up");
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" />

      <Input label="Email" placeholder="Your email ..." />
      <Input isPassword label="Password" placeholder="Your password ..." />

      <Button style={styles.button} title="Sign In" />

      <Seperator text="Or sign up with"></Seperator>

      <GoogleLogin />

      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.footerLink} onPress={onSignUp}>
          {" "}
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default memo(SignIn);

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  agreeText: {
    marginHorizontal: 14,
    color: colors.blue,
  },
  agreeBold: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: 20,
    backgroundColor: colors.blue,
  },
  footerText: {
    color: colors.blue,
    marginBottom: 56,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
  },
});
