import * as React from 'react';
import { Text, View, StatusBar, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  const handlePagination = () => {
    navigation.navigate('Chat');
  };
  return (
    <View styles={styles.view}>
      <Text styles={styles}>Home page</Text>
      <Image source={require('../../assets/main.jpeg')} />
      <Button title="Go to Chat Page" onPress={handlePagination} styles={styles.navigatorButton} />
      <StatusBar style="auto" />
    </View>
  );
}
