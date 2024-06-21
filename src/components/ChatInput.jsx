// src/components/ChatInput.jsx
import React, { useState } from 'react';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Logic to send the message
    console.log("Send message:", message);
    setMessage('');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Logic to handle file upload
    console.log("File uploaded:", file);
  };

  return (
    <div className="chat-input">
      <input 
        type="text" 
        value={message} 
        onChange={handleInputChange} 
        placeholder="Type a message..." 
      />
      <input 
        type="file" 
        id="file-upload" 
        onChange={handleFileUpload} 
        style={{ display: 'none' }} 
      />
      <label htmlFor="file-upload" className="file-upload-label">
        <FaPaperclip />
      </label>
      <button onClick={handleSendMessage}>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
