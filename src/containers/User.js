import React from 'react';
import '../styles/User.css';
import { setActiveUserId } from '../actions';
import { store } from '../store';

export default ({ user }) => {
  const { name, profile_pic, status } = user;
  const handleUserClick = ({ user_id }) => {
    return store.dispatch(setActiveUserId(user_id));
  };

  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img className="User__pic" src={profile_pic} alt={name} />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};
