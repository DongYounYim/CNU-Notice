import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Avatar } from '..';
import Icon from 'react-native-vector-icons/AntDesign';

export default function NoticeTile({ title }) {
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Avatar />
        <Text style={styles.mainText}>{title}</Text>
      </View>

      <Icon name="minuscircleo" size={25} />
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
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
