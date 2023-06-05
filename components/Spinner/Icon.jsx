import React from "react";
import { View } from "react-native-web";

const Icon = ({ children }) => {
  return (
    <View
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "center",
      }}
    >
      {children}
    </View>
  );
};

export default Icon;
