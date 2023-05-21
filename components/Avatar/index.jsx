import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Avatar({ size = 40 }) {
  console.log(size);
  return (
    <View
      style={{
        display: 'relative',
        borderRadius: '50%',
        width: Number(size),
        height: Number(size),
        border: '1px solid black',
      }}
    ></View>
  );
}
