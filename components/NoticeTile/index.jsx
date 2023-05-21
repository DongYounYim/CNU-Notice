import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Avatar } from '..';
import Icon from 'react-native-vector-icons/AntDesign';

export default function NoticeTile({ title, tail, setMyNotice }) {
  const TailComponent = () => {
    switch (tail) {
      case 'plus':
        return <Icon name="pluscircleo" size={25} />;
      case 'minus':
        return <Icon name="minuscircleo" size={25} />;
      default:
        return <></>;
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Avatar />
        <Text style={styles.mainText}>{title}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (tail === 'plus') {
            setMyNotice(prev => [...prev, title]);
          } else if (tail === 'minus') {
            setMyNotice(prev => prev.filter(notice => notice !== title));
          }
        }}
      >
        <TailComponent />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    padding: 12,
    height: 60,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
