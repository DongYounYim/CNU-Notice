import * as React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { HorizonLine, Spinner } from "../../components";
import NoticeTile from "../../components/NoticeTile";
import SearchBar from "../../components/SearchBar";
import { getAllNotices, getMyNotices } from "../../api";

export default function Follow({ navigation: { setParams } }) {
  const [myNotice, setMyNotice] = React.useState([]);
  const [allNotice, setAllNotice] = React.useState([]);
  const [filteredNotice, setFilteredNotice] = React.useState(allNotice);

  const handdleAllNotice = async () => {
    const result = await getAllNotices();
    setAllNotice(result.RESULT);
  };

  React.useEffect(() => {
    //전체 공지 api 요청
    getMyNotices(setMyNotice);
    handdleAllNotice();
  }, []);

  React.useEffect(() => {
    setParams({ myNotice });
  }, [myNotice]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 10, maxHeight: 240 }}>
        <Text
          style={{
            marginVertical: "1.33em",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          나의 공지사항
        </Text>
        <ScrollView style={styles.scrollView}>
          {myNotice.map((notice) => (
            <NoticeTile
              notice={notice}
              key={notice["board_no"]}
              tail="minus"
              setMyNotice={setMyNotice}
            />
          ))}
        </ScrollView>
      </View>

      <HorizonLine />

      <View style={{ paddingHorizontal: 10 }}>
        <Text
          style={{
            marginVertical: "1.33em",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          전체 공지사항
        </Text>
        <View style={{ height: 40 }}>
          <SearchBar
            allNotice={allNotice}
            setFilteredNotice={setFilteredNotice}
          />
        </View>

        {filteredNotice !== undefined && filteredNotice.length ? (
          <View style={{ maxHeight: 320 }}>
            <ScrollView style={styles.scrollView}>
              {filteredNotice.map((notice) => {
                let isInclude = false;
                myNotice.forEach((mNotice) => {
                  if (mNotice["board_no"] === notice["board_no"])
                    isInclude = true;
                });
                const tail = isInclude ? "minus" : "plus";
                return (
                  <NoticeTile
                    notice={notice}
                    key={notice["board_no"]}
                    tail={tail}
                    setMyNotice={setMyNotice}
                  />
                );
              })}
            </ScrollView>
          </View>
        ) : (
          <Spinner size={80} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },
});
