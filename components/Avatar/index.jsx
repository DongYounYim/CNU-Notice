import * as React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';

export default function Avatar({ size = 40 }) {
  return (
    <View
      style={{
        borderRadius: 50,
        width: Number(size),
        height: Number(size),
      }}
    >
      <Image
        style={{
          borderRadius: 50,
          width: '100%',
          height: '100%',
        }}
        source={require('../../assets/mark.svg')}
      />
    </View>
  );
}
