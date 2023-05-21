import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Avatar() {
  return <View style={styles.avatarContainer}></View>;
}

const styles = StyleSheet.create({
  avatarContainer: {
    display: 'relative',
    borderRadius: '50%',
    width: 40,
    height: 40,
    border: '1px solid black',
  },
});
