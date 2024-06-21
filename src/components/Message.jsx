// src/components/Message.jsx
import React from 'react';

const Message = ({ msg }) => {
  const renderMessage = (message, sender) => (
    <div className={`message ${sender === 'you' ? 'message-you' : 'message-other'}`}>
      <p>{message.message}</p>
      <div className="message-timestamp">
        <span>{message.timeStamp}</span>
      </div>
    </div>
  );

  const messageKeys = Object.keys(msg);
  return (
    <div className="message-container">
      {messageKeys.map((key) => renderMessage(msg[key], key))}
    </div>
  );
};

export default Message;

/*
import React from 'react';

const Message = ({ msg }) => {
  const renderMessage = (message, sender) => (
    <div className={`message-${sender}`}>
      <p>{message.message}</p>
      <span>{message.timeStamp}</span>
    </div>
  );

  const messageKeys = Object.keys(msg);

  return (
    <div className="message">
      {messageKeys.map((key) => key !== 'you' ? renderMessage(msg[key], key) : renderMessage(msg[key], 'you'))}
    </div>
  );
};


export default Message;
*/
/*
import React from 'react';

const Message = ({ msg }) => {
  const { user1, you } = msg;

  console.log("msg =", msg);

  return (
    <div className="message">
      { user1 && (
        <div className="message-user1">
          <p>{user1.message}</p>
          <span>{user1.timeStamp}</span>
        </div>
      )}
      {you && (
        <div className="message-you">
          <p>{you.message}</p>
          <span>{you.timeStamp}</span>
        </div>
      )}
    </div>
  );
};

export default Message;
*/
