import React from 'react';
import '../styles/Chats.css';

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? 'is-user-msg' : ''}`}>{text}</span>
  );
};

export default class Chats extends React.Component {
  render() {
    const { messages } = this.props;
    console.log(messages);
    return (
      <div className="Chats">
        {messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}
