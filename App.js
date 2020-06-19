import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB-eEgCys8Cj4RsiNQSUEAwgqvHR4F6U5o",
  authDomain: "libros-213b9.firebaseapp.com",
  databaseURL: "https://libros-213b9.firebaseio.com",
  projectId: "libros-213b9",
  storageBucket: "libros-213b9.appspot.com",
  messagingSenderId: "594598326213",
  appId: "1:594598326213:web:82c1fb71477a510c0aa5ac"
};
firebase.initializeApp(firebaseConfig);

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
