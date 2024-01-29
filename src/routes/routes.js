import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home/home";
const stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      /> */}
    </stack.Navigator>
  );
}
