import * as React from "react";
import { View } from "react-native";

export default function Avatar({ size = 40 }) {
  return (
    <View
      style={{
        borderRadius: 50,
        width: Number(size),
        height: Number(size),
        border: "1px solid black",
      }}
    ></View>
  );
}
