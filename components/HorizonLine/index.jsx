import * as React from "react";
import { View } from "react-native";

const HorizonLine = ({ text }) => {
  return (
    <View
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid lightgray",
        lineHeight: "0.1em",
      }}
    ></View>
  );
};

export default HorizonLine;
