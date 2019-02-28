import React from 'react';
import _ from 'lodash';
import { store } from '../store';
import Header from '../components/Header';
import Chats from '../components/Chats';
import MessageInput from './MessageInput';
import '../styles/ChatWindow.css';

export default ({ activeUserId }) => {
  const { contacts, messages, typing } = store.getState();
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};
