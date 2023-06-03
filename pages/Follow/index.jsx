import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { HorizonLine } from '../../components';
import NoticeTile from '../../components/NoticeTile';
import SearchBar from '../../components/SearchBar';
import { getAllBoards } from '../../api';

export default function Follow() {
  const [myNotice, setMyNotice] = React.useState([]);
  const [allNotice, setAllNotice] = React.useState([]);
  const [filteredNotice, setFilteredNotice] = React.useState(allNotice);

  const handdleAllNotice = async () => {
    const result = await getAllBoards();
    console.log(result.RESULT);
    setAllNotice(result.RESULT);
  };
  React.useEffect(() => {
    //전체 공지 api 요청
    handdleAllNotice();
  }, []);

  console.log(filteredNotice);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: '10px', maxHeight: 240 }}>
        <h4>나의 공지사항</h4>
        <ScrollView style={styles.scrollView}>
          {myNotice.map(notice => (
            <NoticeTile
              notice={notice['site_nm']}
              key={notice['board_no']}
              tail="minus"
              setMyNotice={setMyNotice}
            />
          ))}
        </ScrollView>
      </View>

      <HorizonLine />

      <View style={{ paddingHorizontal: '10px' }}>
        <h4>전체 공지사항</h4>
        <SearchBar allNotice={allNotice} setFilteredNotice={setFilteredNotice} />

        <View style={{ maxHeight: 320 }}>
          <ScrollView style={styles.scrollView}>
            {filteredNotice.map(notice => {
              let isInclude = false;
              myNotice.forEach(mNotice => {
                if (mNotice['site_nm'] === notice['site_nm']) isInclude = true;
              });
              const tail = isInclude ? 'minus' : 'plus';
              return (
                <NoticeTile
                  notice={notice['site_nm']}
                  key={notice['board_no']}
                  tail={tail}
                  setMyNotice={setMyNotice}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
});
