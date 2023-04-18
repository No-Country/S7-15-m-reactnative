import React from 'react'
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import theme from '../themes/theme.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import getUsers from '../services/getUsers.js';
import FeedItem from '../components/FeedItem.js';
import { socket } from '../services/socketConnect.js';
import { updateConversation } from '../store/conversation/conversation.js';

const FeedScreen = () => {
    const { user } = useSelector((store) => store.auth);
    const { conversation } = useSelector((store) => store.conversation);
    const [ users, setUsers ] = useState(null);
    const dispatch = useDispatch();

// traer todos los usuarios
    useEffect(() => {
        async function request () {
        const data =  await getUsers()
        const newusers = data.filter(e => e._id !== user._id)
        setUsers(newusers)
        }
        request()
    // busca las conversations del user logueado
    socket.emit('getConv', user._id);
    socket.on('sendConv', (data) => {
      const contacAndConversation = data.map((item) => {
        const contact = item.users.find((elem) => elem._id !== user._id);
        return {
          idConversation: item._id,
          contact,
        };
      });
      dispatch(updateConversation(contacAndConversation));
      
    }); 

    }, [dispatch, user])

  return (
    
    <View style={styles.container}>
      <FlatList
        style={styles.root}
        data={users}
        renderItem={({ item }) => (
            <FeedItem
            conectUser={item}
            />
            )}
            keyExtractor={(item) => item._id}
            />
    </View>
  
  )
}

export default FeedScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      minHeight: '100%',
    },
    list: {
      paddingHorizontal: 10,
      width: '100%',
      minHeight: '100%',
    },
  });
