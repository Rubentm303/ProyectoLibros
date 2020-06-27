import React from "react";
import { View, Text, Animated } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Perfil from "../screens/Perfil.js";
import Login from "../Security/Login.js"

export default function App() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="Libros"
                component={Perfil}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    );
}
