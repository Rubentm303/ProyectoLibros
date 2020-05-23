import React from "react";
import { View, Text, Animated } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Destacados from "../screens/Destacados";

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Destacados"
        component={Destacados}
        options={{
          title: "Libros más destacados",
          headerTitleAlign: "center",
          headerTintColor: "#3282b8",
        }}
      />
    </Stack.Navigator>
  );
}
