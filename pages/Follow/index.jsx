import * as React from 'react';
import { Text, View, StatusBar, ScrollView, StyleSheet } from 'react-native';
import { HorizonLine } from '../../components';
import NoticeTile from '../../components/NoticeTile';
import SearchBar from '../../components/SearchBar';

export default function Follow() {
  const [myNotice, setMyNotice] = React.useState([
    '충남대학교 인재개발원',
    '충남대학교 컴퓨터융합학부',
  ]);
  const [allNotice, setAllNotice] = React.useState([
    '충남대학교 사업단',
    '충남대학교 기계공학과1',
    '충남대학교 기계공학과2',
    '충남대학교 기계공학과3',
    '충남대학교 기계공학과4',
    '충남대학교 기계공학과5',
    '충남대학교 기계공학과6',
  ]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: '10px' }}>
        <h4>나의 공지사항</h4>
        {myNotice.map(title => (
          <NoticeTile title={title} key={title} />
        ))}
      </View>

      <HorizonLine />

      <View style={{ paddingHorizontal: '10px' }}>
        <h4>전체 공지사항</h4>
        <SearchBar />

        <View style={{ height: 360 }}>
          <ScrollView style={styles.scrollView}>
            {allNotice.map(title => (
              <NoticeTile title={title} key={title} />
            ))}
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
