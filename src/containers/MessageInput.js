import React from 'react';
import { store } from '../store';
import { setTypingValue, sendMessage } from '../actions';
import '../styles/MessageInput.css';

export default ({ value }) => {
  const handleInput = e => store.dispatch(setTypingValue(e.target.value));
  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = store.getState();
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleInput}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};
