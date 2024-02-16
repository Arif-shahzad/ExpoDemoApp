import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import MainNavigation from "./src/navigation/MainNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootSiblingParent>
        <NavigationContainer>
          <StatusBar
            barStyle='dark-content'
            translucent
            backgroundColor='rgba(255,255,255,0.1)'
          />
          <MainNavigation />
        </NavigationContainer>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
}
