import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChatTile } from '../../components';

import { getDetailNotice, getMyNotices } from '../../api';
import { useFocusEffect } from '@react-navigation/native';

const DummyData = [
  {
    title: '[CNU] 컴퓨터공학과',
    content: '[TOPCIT] 시험안내',
    tail: 'alram',
  },
  {
    title: '[CNU] 인재개발원',
    tail: 'plus',
  },
  {
    title: '[CNU] ADMIN 동아리',
    content: '[MT공지] 안녕하세요, ADMIN 회장 정민석입니다. 이번 엠티는 블라블라블라',
    tail: 'none',
  },
  {
    title: '[CNU] ARGOS 동아리',
    tail: 'minus',
  },
];

export default function Chat({ navigation }) {
  const [myNotice, setMyNotice] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getMyNotices(setMyNotice);
    }, []),
  );
  console.log(myNotice);
  return (
    <View>
      {myNotice.map(({ board_no, board_nm, site_nm }) => (
        <TouchableOpacity
          key={board_no}
          onPress={() => navigation.navigate('ChatRoom', { title: `${site_nm} (${board_nm})` })}
        >
          <ChatTile title={`${site_nm} (${board_nm})`} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
