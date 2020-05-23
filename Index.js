import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigation/BottomTabNavigator";

const Stack = createStackNavigator();
export default function Index(props) {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
