import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Bookmark from "react-native-vector-icons/FontAwesome";

export default function NoticeTr({ read, title, date, bookmark, isNew }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: "6px",
        padding: "8px",
        backgroundColor: read ? "#BDBDBD" : "none",
      }}
    >
      <Bookmark name={bookmark ? "bookmark" : "bookmark-o"} size={20} />
      <Text
        style={{
          backgroundColor: "orange",
          padding: "4px",
          borderRadius: "10px",
          color: "white",
          fontWeight: "600",
          fontSize: "0.5rem",
          visibility: isNew ? "visible" : "hidden",
        }}
      >
        new
      </Text>
      <Text
        style={{
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </Text>
      <Text>{date}</Text>
    </View>
  );
}
