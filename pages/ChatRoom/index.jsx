import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { NoticeTr } from "../../components";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-web";

export default function ChatRoom({ route }) {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.serachBar}>
        <TextInput
          style={{
            height: 30,
            width: "90%",
            fontSize: "16px",
            backgroundColor: "#EEECE8",
            padding: "8px",
          }}
          onChangeText={onChangeText}
          value={text}
          placeholder="공지 검색을 해보세요"
        />
        <Icon name="search1" size={25} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "8px",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: "1rem",
            textAlign: "left",
            fontWeight: "600",
          }}
        >
          오늘 올라온 공지 3 건
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Text
            style={{
              fontSize: "0.5rem",
              textAlign: "right",
            }}
          >
            1444중 1 - 20
          </Text>
          <TouchableOpacity>{"<"}</TouchableOpacity>
          <TouchableOpacity>{">"}</TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <NoticeTr
          read={true}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus voluptas ipsam. In
          obcaecati exercitationem, nisi quod possimus ullam rem laborum perspiciatis repellat id
          asperiores sunt dolores nesciunt odio corporis?"
          isNew={true}
        />
        <NoticeTr
          read={false}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus voluptas ipsam. In
          obcaecati exercitationem, nisi quod possimus ullam rem laborum perspiciatis repellat id
          asperiores sunt dolores nesciunt odio corporis?"
          isNew={true}
        />
        <NoticeTr
          read={true}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus voluptas ipsam. In
          obcaecati exercitationem, nisi quod possimus ullam rem laborum perspiciatis repellat id
          asperiores sunt dolores nesciunt odio corporis?"
          isNew={true}
        />
        <NoticeTr
          read={true}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus voluptas ipsam. In
          obcaecati exercitationem, nisi quod possimus ullam rem laborum perspiciatis repellat id
          asperiores sunt dolores nesciunt odio corporis?"
        />
        <NoticeTr
          read={true}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus voluptas ipsam. In
          obcaecati exercitationem, nisi quod possimus ullam rem laborum perspiciatis repellat id
          asperiores sunt dolores nesciunt odio corporis?"
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90vh",
    backgroundColor: "#B4C5DE",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  serachBar: {
    width: "100%",
    height: "7%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    height: 40,
  },
});
