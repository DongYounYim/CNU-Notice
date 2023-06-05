import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { NoticeTr, Spinner } from "../../components";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-web";

import { getDetailNotice } from "../../api";

const lengthOneToTwo = (value) => {
  return value.toString().length === 1 ? `0${value}` : value;
};

export default function ChatRoom({ route }) {
  const [text, onChangeText] = React.useState("");
  const [allData, setAllData] = React.useState([]);
  const today = new Date();
  const todayStringFormat = `${`${today.getFullYear()}`.slice(
    2
  )}.${lengthOneToTwo(today.getMonth() + 1)}.${lengthOneToTwo(
    today.getDate()
  )}`;

  const getData = async () => {
    const response = await getDetailNotice(route.params.board_no);
    setAllData(response.RESULT);
  };

  React.useEffect(() => {
    getData();
  }, []);

  // TODO: 페이지네이션
  // TODO: 읽은 데이터 저장
  // TODO: 북마크 기능 활성화
  // TODO: 데이터 정렬 기능?

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
            {`${allData.length !== 0 ? allData.length : 0}중 1 - 20`}
          </Text>
          <TouchableOpacity>
            <Text>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {allData.length !== 0 ? (
          allData.map(({ article_no, article_title, update_dt }) => {
            // timestamp to Date 변환
            const article_date = new Date(update_dt.time);
            const dateStringFormat = `${`${article_date.getFullYear()}`.slice(
              2
            )}.${lengthOneToTwo(article_date.getMonth() + 1)}.${lengthOneToTwo(
              article_date.getDate()
            )}`;
            return (
              <NoticeTr
                key={article_no}
                read={false}
                isNew={dateStringFormat === todayStringFormat}
                title={article_title}
                date={dateStringFormat}
              />
            );
          })
        ) : (
          <Spinner size={80} />
        )}
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
