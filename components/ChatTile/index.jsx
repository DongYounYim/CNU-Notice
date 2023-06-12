import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import Avatar from "../Avatar";

export default function ChatTile({ title, content, tail }) {
  const TailComponent = () => {
    switch (tail) {
      case "alram":
        return <View style={styles.alram} />;
      default:
        return <></>;
    }
  };
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={{ flex: 1 }}>
        <Text style={styles.mainText}>{title}</Text>
        {content && <Text style={styles.subText}>{content}</Text>}
      </View>
      <TailComponent />
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
    whiteSpace: "nowrap",
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  alram: {
    borderRadius: 50,
    width: 10,
    height: 10,
    backgroundColor: "blue",
  },
});
