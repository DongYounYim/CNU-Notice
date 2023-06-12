import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Follow from "./pages/Follow";
import ChatRoom from "./pages/ChatRoom";
import { TouchableOpacity, Pressable } from "react-native";
import { saveMyNotices } from "./api";
import Detail from "./pages/Detail";

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
            headerTitle: () => (
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>공지방</Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ paddingRight: 8 }}
                onPress={() => navigation.navigate("Follow")}
              >
                <Icon name="add-circle-outline" size={30} />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 8 }}
                onPress={() => navigation.pop()}
              >
                <Icon name="arrow-back" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Follow"
          component={Follow}
          options={({ navigation, route: { params } }) => ({
            headerTitle: () => (
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  충남대학교 공지사항
                </Text>
              </View>
            ),
            headerRight: () => (
              <Pressable
                style={{
                  border: "1px solid black",
                  padding: 8,
                  marginRight: 8,
                }}
                onPress={async () => {
                  await saveMyNotices(Object.values(params.myNotice));
                  navigation.pop();
                }}
              >
                <Text>완료</Text>
              </Pressable>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 8 }}
                onPress={() => navigation.pop()}
              >
                <Icon name="arrow-back" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={({ navigation, route }) => ({
            headerTitle: () => (
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {route.params.title}
                </Text>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 8 }}
                onPress={() => navigation.pop()}
              >
                <Icon name="arrow-back" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ navigation, route }) => ({
            headerTitle: () => (
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {route.params.title}
                </Text>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 8 }}
                onPress={() => navigation.pop()}
              >
                <Icon name="arrow-back" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
