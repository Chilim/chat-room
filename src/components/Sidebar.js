import React from 'react';
import '../styles/Sidebar.css';
import User from '../containers/User';

export default ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => {
        return <User user={contact} key={contact.user_id} />;
      })}
    </aside>
  );
};
