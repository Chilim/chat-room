import React from 'react';
import _ from 'lodash';
import { store } from '../store';
import Header from '../components/Header';
import Chats from '../components/Chats';

export default ({ activeUserId }) => {
  const { contacts, messages } = store.getState();
  const activeUser = contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
    </div>
  );
};
