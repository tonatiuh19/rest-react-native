import * as React from "react";
import { StyleSheet, AsyncStorage } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Payment from "../src/components/Payment/Payment";
import Login from "./Login/Login";
import Reservations from "./Reservations/Reservations";
import SignUp from "./SignUp/SignUp";
import TabTwoItem from "./TabTwoItem/TabTwoItem";

import {
  createStackNavigator,
  HeaderBackButton,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

function TabTwoApp() {
  return (
    <Stack.Navigator
      initialRouteName="TabTwoScreen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <Stack.Screen
        name="TabTwoScreen"
        options={{ headerShown: false }}
        component={TabTwoScreen}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reservations"
        component={Reservations}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default TabTwoApp;

function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <TabTwoItem></TabTwoItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
