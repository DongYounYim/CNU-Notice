import * as React from "react";
import { View } from "react-native";

const Icon = ({ children }) => {
  return (
    <View
      style={{
        verticalAlign: "middle",
        textAlign: "center",
      }}
    >
      {children}
    </View>
  );
};

export default Icon;
