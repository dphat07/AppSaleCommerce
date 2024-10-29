import { View, StyleSheet } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="" />
      <Input label="Email" placeholder="" />
      <Input isPassword label="Password" placeholder="" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
