import React from "react";
import { View, Text, Animated } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Libros from "../screens/Libros";

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Libros"
        component={Libros}
        options={{
          title: "Libros Disponibles",
          headerTitleAlign: "center",
          headerTintColor: "#3282b8",
        }}
      />
    </Stack.Navigator>
  );
}
