// src/components/ChatWindow.jsx
import React from 'react';
import Message from './Message';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

const ChatWindow = ({ user, chat }) => {
  console.log(`${user}:`, chat);
  console.log(user);
  return (
    <div className="chat-window">
      <ChatHeader user={user} />
      {chat.map((msg, index) => (
        <Message key={index} msg={msg} />
      ))}
      <ChatInput />
    </div>
  );
};

export default ChatWindow;

/*
import React from 'react';
import Message from './Message';
import { FaVideo, FaPhone, FaEllipsisV } from 'react-icons/fa';
import ChatHeader from './ChatHeader';

const ChatWindow = ({ user, chat }) => {
  console.log(`${user}:`,chat)
  console.log(user)
  return (


      <div className="chat-window">
        <ChatHeader /> // remove this after
        {chat.map((msg, index) => (
          <Message key={index} msg={msg} />
        ))}
      </div>

  );
};

export default ChatWindow;
*/


