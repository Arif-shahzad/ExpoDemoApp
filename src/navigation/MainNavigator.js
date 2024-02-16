import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Info from "../screen/Info";
import Home from "../screen/Home";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Info' component={Info} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
