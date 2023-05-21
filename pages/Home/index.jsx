import * as React from 'react';
import { Text, View, StatusBar, Button, StyleSheet, Image, Dimensions } from 'react-native';

export default function Home({ navigation }) {
  const handlePagination = () => {
    navigation.navigate('Chat');
  };
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require('../../assets/main.jpeg')} />
      </View>

      {/* <Button title="Go to Chat Page" onPress={handlePagination} /> */}
      {/* <StatusBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  imageView: {
    width: '100%',
    height: '90vh',
  },
});
