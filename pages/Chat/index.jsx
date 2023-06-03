import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChatTile } from '../../components';

import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';

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
  const [boards, setBoards] = React.useState([]);

  const getBoards = async () => {
    const boardCol = collection(db, 'board');
    const boardSnapshot = await getDocs(boardCol);
    const boardList = boardSnapshot.docs.map(doc => doc.data());
    setBoards(boardList);
  };

  React.useEffect(() => {
    getBoards();
  }, []);
  return (
    <View>
      {DummyData.map(({ title, content, tail }, key) => (
        <TouchableOpacity key={key} onPress={() => navigation.navigate('ChatRoom', { title })}>
          <ChatTile title={title} content={content} tail={tail} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
