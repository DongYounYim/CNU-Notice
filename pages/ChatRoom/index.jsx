import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ChatMessage } from '../../components';

export default function ChatRoom({ route }) {
  console.log(route.params.title);
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
});
