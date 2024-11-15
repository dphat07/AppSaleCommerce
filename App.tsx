import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/screens/auth/SplashScreen";
import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/SignIn";

export default function App() {
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}
