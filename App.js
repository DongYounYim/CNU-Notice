import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Follow from "./pages/Follow";
import { TouchableOpacity } from "react-native-web";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({ navigation }) => ({
            headerTitle: ({ children }) => (
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>공지방</Text>
              </View>
            ),
            headerRight: (props) => (
              <TouchableOpacity>
                <Icon name="add-circle-outline" size={30} />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Icon name="arrow-back" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: {
              margin: "8px 8px",
            },
          })}
        />
        <Stack.Screen name="Follow" component={Follow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
