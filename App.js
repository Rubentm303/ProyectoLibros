import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Security/Login";
import Inicio from "./Security/Inicio";
import RegistrarNuevo from "./Security/Registrar";
import Index from "./Index";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegistrarNuevo" component={RegistrarNuevo} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
