import React from "react";
import { View, Text } from "react-native-web";

export default function Detail({ route }) {
  const { title, content, writer } = route.params;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{writer}</Text>
      <View>{content}</View>
    </View>
  );
}
