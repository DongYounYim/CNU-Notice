import * as React from "react";
import { Text, View, StatusBar, Button } from "react-native";

export default function Home({ navigation }) {
  const handlePagination = () => {
    navigation.navigate("Chat");
  };
  return (
    <View>
      <Text>Home page</Text>
      <Button title="Go to Chat Page" onPress={handlePagination} />
      <StatusBar style="auto" />
    </View>
  );
}
