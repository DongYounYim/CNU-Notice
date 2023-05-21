import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Avatar } from "../";
import Icon from "react-native-vector-icons/AntDesign";

export default function ChatRoom({ title, content, tail }) {
  const TailComponent = () => {
    switch (tail) {
      case "alram":
        return <View style={styles.alram} />;
      case "plus":
        return <Icon name="pluscircleo" size={20} />;
      case "minus":
        return <Icon name="minuscircleo" size={20} />;
      default:
        return <></>;
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Avatar />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.mainText}>{title}</Text>
        {content && <Text style={styles.subText}>{content}</Text>}
      </View>
      <View>
        <TailComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
  },
  mainText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    display: "block",
    whiteSpace: "nowrap",
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  alram: {
    display: "relative",
    borderRadius: "50%",
    width: 10,
    height: 10,
    backgroundColor: "blue",
  },
});
