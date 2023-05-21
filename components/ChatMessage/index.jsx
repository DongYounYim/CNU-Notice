import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Avatar } from '..';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ChatMessage({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Avatar size={'25'} />
        <Text>{name}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus voluptas ipsam. In
          obcaecati exercitationem, nisi quod possimus ullam rem laborum perspiciatis repellat id
          asperiores sunt dolores nesciunt odio corporis?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    margin: 'auto',
    gap: 6,
  },
  nameView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 6,
  },
  contentContainer: {
    width: 350,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 16,
  },
  subText: {
    display: 'block',
    whiteSpace: 'nowrap',
    fontSize: 12,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  alram: {
    display: 'relative',
    borderRadius: '50%',
    width: 10,
    height: 10,
    backgroundColor: 'blue',
  },
});
