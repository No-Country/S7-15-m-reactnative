import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import TabNavigation from './TabNavigation.js';
import { useSelector } from 'react-redux';
import LoadScreen from '../screens/LoadScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { socket } from '../services/socketConnect.js';

const RootNavegation = () => {
  const { status } = useSelector((store) => store.auth);
  const Stack = createNativeStackNavigator();

  socket.on('joinConversation', (id) => {
    socket.emit('joined', id);
  });

  return (
    <NavigationContainer>
      {status === 'unauthorized' ? (
        <HomeNavigation />
      ) : (
        <Stack.Navigator
          initialRouteName='Loading'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Loading' component={LoadScreen} />
          <Stack.Screen name='App' component={TabNavigation} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavegation;
