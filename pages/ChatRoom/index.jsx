import React from "react";
import { View, Text } from "react-native";

export default function ChatRoom({ route }) {
  console.log(route.params.title);
  return (
    <View>
      <Text>채팅방</Text>
    </View>
  );
}
