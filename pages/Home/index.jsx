import * as React from 'react';
import {
  Text,
  View,
  StatusBar,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Chat from '../Chat';
export default function Home({ navigation }) {
  const handlePagination = () => {
    navigation.navigate('Chat');
  };
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require('../../assets/main.jpeg')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '10vh',
        }}
      >
        <TouchableOpacity
          style={{
            width: '20%',
            height: '10vh',
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
        >
          <MaterialCommunityIcons name="home" size={30} />
          <Text>메인</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '20%',
            height: '10vh',
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
        >
          <MaterialCommunityIcons name="message-outline" size={30} />
          <Text>메신저</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '20%',
            height: '10vh',
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
          onPress={handlePagination}
        >
          <MaterialCommunityIcons name="bullhorn-variant-outline" size={30} />
          <Text>공지</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '10vh',
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
        >
          <MaterialCommunityIcons name="town-hall" size={30} />
          <Text>백마인턴십</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '10vh',
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
        >
          <MaterialCommunityIcons name="book-open-page-variant-outline" size={30} />
          <Text>도서관</Text>
        </TouchableOpacity>
      </View>

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
  navigationTab: {
    backgroundColor: 'white',
  },
});
