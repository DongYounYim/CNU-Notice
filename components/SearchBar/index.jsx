import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

export default function SearchBar({
  allNotice,
  setFilteredNotice,
  isChatRoom = false,
}) {
  const [text, onChangeText] = React.useState("");

  React.useEffect(() => {
    if (text === "") return setFilteredNotice(allNotice);
    const filteredNotice = isChatRoom
      ? allNotice.filter((notice) => notice["article_title"].includes(text))
      : allNotice.filter(
          (notice) =>
            notice["site_nm"].includes(text) ||
            notice["board_nm"].includes(text)
        );
    setFilteredNotice(filteredNotice);
  }, [allNotice, text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: "100%", width: "90%", fontSize: 16 }}
        onChangeText={onChangeText}
        value={text}
      />

      <Icon name="search1" size={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "lightgray",
  },
});
