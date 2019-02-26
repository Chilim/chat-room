import React from "react";
import "../styles/Sidebar.css";
import User from "./User";

export default ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};
