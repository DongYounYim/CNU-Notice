import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { HorizonLine } from '../../components';
import NoticeTile from '../../components/NoticeTile';
import SearchBar from '../../components/SearchBar';

export default function Follow() {
  const [myNotice, setMyNotice] = React.useState([
    '충남대학교 인재개발원',
    '충남대학교 컴퓨터융합학부',
  ]);
  const [allNotice, setAllNotice] = React.useState(['충남대학교 사업단', '충남대학교 기계공학과']);
  return (
    <View>
      <Text style={{ paddingLeft: '10px' }}>
        <h3>나의 공지사항</h3>
        {myNotice.map(title => (
          <NoticeTile title={title} key={title} />
        ))}
      </Text>

      <HorizonLine />

      <Text style={{ padding: '10px' }}>
        <h3>전체 공지사항</h3>
        <SearchBar />
        {allNotice.map(title => (
          <NoticeTile title={title} key={title} />
        ))}
      </Text>
    </View>
  );
}
