import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { ChatMessage } from '../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import Bookmark from 'react-native-vector-icons/FontAwesome';

export default function ChatRoom({ route }) {
  const [text, onChangeText] = React.useState('');
  const [isBookMark, setIsBookMark] = React.useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ChatMessage name={route.params.title} />
        <ChatMessage name={route.params.title} />
        <ChatMessage name={route.params.title} />
        <ChatMessage name={route.params.title} />
        <ChatMessage name={route.params.title} />
        <ChatMessage name={route.params.title} />
        <ChatMessage name={route.params.title} />
        <ChatMessage name={route.params.title} />
      </ScrollView>

      <View style={styles.serachBar}>
        <Bookmark name={isBookMark ? 'bookmark' : 'bookmark-o'} size={25} />
        <TextInput
          style={{ height: 30, width: '80%', fontSize: '16px', backgroundColor: '#EEECE8' }}
          onChangeText={onChangeText}
          value={text}
        />

        <Icon name="search1" size={25} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90vh',
    backgroundColor: '#B4C5DE',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  serachBar: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    height: 40,
  },
});
