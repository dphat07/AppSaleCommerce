import { View, StyleSheet, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import CheckBox from "../../../components/CheckBox";
import { useState } from "react";
import { colors } from "../../../../utils/colors";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Your name ..." />
      <Input label="Email" placeholder="Your email ..." />
      <Input isPassword label="Password" placeholder="Your password ..." />

      <View style = { styles.agreeRow}>
        <CheckBox checked= {checked} onCheck={setChecked}></CheckBox>
        <Text style= {styles.agreeText}>I agree with <Text style = {styles.agreeBold}>Terms</Text> & <Text style= {styles.agreeBold}>Privacy</Text></Text>
      </View>

      <Button style = {styles.button} title="Sign Up"  />

      <Seperator text="Or sign up with"></Seperator>
    </View>
  );
};

export default SignUp;

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
    color : colors.blue
  },
  agreeBold: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: 20,
    backgroundColor: colors.blue,
  }
});
