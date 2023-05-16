import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Follow from "./pages/Follow";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Follow" component={Follow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
