import React from "react";
import "../styles/User.css";

export default ({ user }) => {
  const { name, profile_pic, status } = user;
  return (
    <div className="User">
      <img className="User__pic" src={profile_pic} alt={name} />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};
