import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NoticeTr, Spinner } from '../../components';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';

import { getBookMarks, getDetailNotice, getReadNotice, setReadNotice } from '../../api';
import SearchBar from '../../components/SearchBar';

const lengthOneToTwo = value => {
  return value.toString().length === 1 ? `0${value}` : value;
};

export default function ChatRoom({ route, navigation }) {
  const [allData, setAllData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState(allData);
  const [read, setRead] = React.useState([]);
  const [bookmarked, setBookmarked] = React.useState([]);
  const [todayNotice, setTodayNotice] = React.useState(0);

  //page
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(0);

  const today = new Date();
  const todayStringFormat = `${`${today.getFullYear()}`.slice(2)}.${lengthOneToTwo(
    today.getMonth() + 1,
  )}.${lengthOneToTwo(today.getDate())}`;

  const getData = async () => {
    // 공지 불러오기
    const response = await getDetailNotice(route.params.board_no);
    setAllData(response.RESULT);
    const data = response.RESULT;
    const todayArticle = data.filter(({ update_dt }) => {
      const article_date = new Date(update_dt.time);
      const dateStringFormat = `${`${article_date.getFullYear()}`.slice(2)}.${lengthOneToTwo(
        article_date.getMonth() + 1,
      )}.${lengthOneToTwo(article_date.getDate())}`;
      return dateStringFormat === todayStringFormat;
    });
    setTodayNotice(todayArticle.length);
    // 읽은 공지 데이터 불러오기
    const readData = await getReadNotice(route.params.board_no);
    setRead(readData === undefined ? [] : readData);
    // 북마크 해둔 데이터 불러오기
    const bookmarkedData = await getBookMarks(route.params.board_no);
    setBookmarked(bookmarkedData === undefined ? [] : bookmarkedData);
  };

  const handleGoDetail = async (article_no, article_title, article_text, writer_nm) => {
    await setReadNotice(route.params.board_no, article_no);
    setRead(state => [...state, article_no]);
    navigation.navigate('Detail', {
      title: article_title,
      content: article_text,
      writer: writer_nm,
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    setStart(0);
    setEnd(filteredData.length < 20 ? filteredData.length : 20);
  }, [filteredData]);

  return (
    <View style={styles.container}>
      <View style={styles.serachBar}>
        <SearchBar allNotice={allData} setFilteredNotice={setFilteredData} isChatRoom={true} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '8px',
          width: '100%',
        }}
      >
        <Text
          style={{
            fontSize: '1rem',
            textAlign: 'left',
            fontWeight: '600',
          }}
        >
          오늘 올라온 공지 {todayNotice} 건
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Text
            style={{
              fontSize: '0.8rem',
              textAlign: 'right',
            }}
          >
            {`${filteredData.length !== 0 ? filteredData.length : 0}중 ${start + 1} - ${end}`}
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (start > 0) {
                setStart(state => state - 20);
                setEnd(state => state - 20);
              }
            }}
          >
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (end < filteredData.length) {
                setStart(state => state + 20);
                setEnd(state => state + 20);
              }
            }}
          >
            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredData.length !== 0 ? (
          filteredData
            .slice(start, end)
            .map(({ article_no, article_title, article_text, writer_nm, update_dt }) => {
              // timestamp to Date 변환
              const article_date = new Date(update_dt.time);
              const dateStringFormat = `${`${article_date.getFullYear()}`.slice(
                2,
              )}.${lengthOneToTwo(article_date.getMonth() + 1)}.${lengthOneToTwo(
                article_date.getDate(),
              )}`;
              return (
                <TouchableOpacity
                  key={article_no}
                  onPress={() => handleGoDetail(article_no, article_title, article_text, writer_nm)}
                >
                  <NoticeTr
                    board_no={route.params.board_no}
                    article_no={article_no}
                    read={read.includes(article_no)}
                    isNew={dateStringFormat === todayStringFormat}
                    title={article_title}
                    bookmark={bookmarked.includes(article_no)}
                    date={dateStringFormat}
                  />
                </TouchableOpacity>
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
    width: '100%',
    height: '90vh',
    backgroundColor: '#B4C5DE',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  serachBar: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    padding: 8,
  },
});
