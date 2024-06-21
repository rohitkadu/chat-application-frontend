// src/components/ChatHeader.jsx
import React from 'react';
import { FaVideo, FaPhone, FaEllipsisV } from 'react-icons/fa';

const ChatHeader = ({ user }) => {
  return (
    <div className="chat-header">
      <img src={user.profilePictureURL} alt={user.name} className="profile-picture" />
      <div className="contact-info">
        <h2>{user.name}</h2>
      </div>
      <div className="chat-actions">
        <FaVideo className="action-icon" />
        <FaPhone className="action-icon" />
        <FaEllipsisV className="action-icon" />
      </div>
    </div>
  );
};

export default ChatHeader;

/*
import React from 'react';

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <img src={user.profilePictureURL} alt={user.name} className="profile-picture" />
      <div className="contact-info">
        <h2>{user.name}</h2>
      </div>
      <div className="chat-actions">
        <FaVideo className="action-icon" />
        <FaPhone className="action-icon" />
        <FaEllipsisV className="action-icon" />
      </div>
    </div>
  )

}

export default ChatHeader;
*/