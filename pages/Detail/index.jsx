import * as React from "react";
import { ScrollView, View, Text, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";

export default function Detail({ route }) {
  const { width } = useWindowDimensions();
  const { title, content, writer } = route.params;
  console.log(content);
  const source = {
    html: content.replace("/_attach", "https://computer.cnu.ac.kr/_attach"),
  };
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            minWidth: "max-content",
            padding: 8,
            borderRight: "1px solid black",
          }}
        >
          제목
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "600", padding: 4 }}>
          {title}
        </Text>
      </View>
      <View style={{ minHeight: 1200 }}>
        <RenderHTML contentWidth={width} source={source} />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            minWidth: "max-content",
            padding: 8,
            borderRight: "1px solid black",
          }}
        >
          작성자
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 600, padding: 4 }}>
          {writer}
        </Text>
      </View>
    </ScrollView>
  );
}
