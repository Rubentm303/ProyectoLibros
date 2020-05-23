import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import StackDestacados from "../screens/StackDestacados";
import StackLibros from "../screens/StackLibros";
import Perfil from "../screens/Perfil";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="StackDestacados"
        component={StackDestacados}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="heart-o" />
          ),
          tabBarLabel: () => false,
        }}
      />

      <BottomTab.Screen
        name="StackLibros"
        component={StackLibros}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="book" />
          ),
          tabBarLabel: () => false,
        }}
      />

      <BottomTab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user-o" />
          ),
          tabBarLabel: () => false,
        }}
      />
    </BottomTab.Navigator>
  );
}
