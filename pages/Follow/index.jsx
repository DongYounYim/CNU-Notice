import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { HorizonLine } from '../../components';

export default function Follow() {
  const [myNotice, setMyNotice] = React.useState([]);
  return (
    <View>
      <Text style={{ paddingLeft: '10px' }}>
        <h3>나의 공지사항</h3>
      </Text>

      <HorizonLine />
    </View>
  );
}
