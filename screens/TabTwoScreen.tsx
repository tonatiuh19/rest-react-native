import * as React from "react";
import { StyleSheet, AsyncStorage } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Payment from "../src/components/Payment/Payment";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import TabTwoItem from "./TabTwoItem/TabTwoItem";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Payment></Payment>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
