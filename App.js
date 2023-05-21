import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Chat from './pages/Chat';
import Home from './pages/Home';
import Follow from './pages/Follow';
import ChatRoom from './pages/ChatRoom';
import { TouchableOpacity, Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>공지방</Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ paddingRight: '8px' }}
                onPress={() => navigation.navigate('Follow')}
              >
                <Icon name="add-circle-outline" size={30} />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: '8px' }} onPress={() => navigation.pop()}>
                <Icon name="arrow-back" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Follow"
          component={Follow}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>충남대학교 공지사항</Text>
              </View>
            ),
            headerRight: () => (
              <Pressable
                style={{
                  border: '1px solid black',
                  padding: '8px',
                  marginRight: '8px',
                }}
                onPress={() => navigation.pop()}
              >
                <Text>완료</Text>
              </Pressable>
            ),
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: '8px' }} onPress={() => navigation.pop()}>
                <Icon name="arrow-back" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={({ navigation, route }) => ({
            headerTitle: () => (
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{route.params.title}</Text>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: '8px' }} onPress={() => navigation.pop()}>
                <Icon name="arrow-back" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
