import React, { useState, useRef } from 'react';
import Modal from './Modal';
import { truncateMessage } from '../utils';

const ContactItem = ({ contact, onSelectContact, onModalAction, selectedUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const handleModalAction = (action) => {
    onModalAction(contact.userId, action);
    setShowModal(false);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    const rect = buttonRef.current.getBoundingClientRect();
    setModalPosition({ top: rect.top + window.scrollY, left: rect.left + window.scrollX });
    setShowModal(true);
  };

  const lastMessage = contact.chat[contact.chat.length - 1];
  const lastMessageText = lastMessage?.user1?.message || lastMessage?.user2?.message;

  // Determine if this contact is selected
  const isSelected = selectedUser && contact.userId === selectedUser.userId;

  return (
    <div className={`contact-item ${isSelected ? 'active' : ''}`} onClick={() => onSelectContact(contact.userId)}>
      <img src={contact.profilePictureURL} alt={contact.name} />
      <div>
        <h4>{contact.name}</h4>
        <p>{truncateMessage(lastMessageText)}</p>
      </div>
      {!isSelected && <span>{contact.unreadCount}</span>}
      <button ref={buttonRef} onClick={handleButtonClick}>⋮</button>
      {showModal && 
        <Modal 
          onClose={() => setShowModal(false)} 
          onAction={handleModalAction} 
          position={modalPosition}
        />
      }
    </div>
  );
};

export default ContactItem;


/*
import React, { useState, useRef } from 'react';
import Modal from './Modal';
import { truncateMessage } from '../utils';

const ContactItem = ({ contact, onSelectContact, onModalAction, selectedUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const handleModalAction = (action) => {
    onModalAction(contact.userId, action);
    setShowModal(false);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    const rect = buttonRef.current.getBoundingClientRect();
    setModalPosition({ top: rect.top + window.scrollY, left: rect.left + window.scrollX });
    setShowModal(true);
  };

  const lastMessage = contact.chat[contact.chat.length - 1];
  const lastMessageText = lastMessage?.user1?.message || lastMessage?.user2?.message;

  // Determine if this contact is selected
  const isSelected = contact.isSelected;

  console.log(selectedUser)



  return (
    <div className={`contact-item ${isSelected ? 'active' : ''}`} onClick={() => onSelectContact(contact.userId)}>
      <img src={contact.profilePictureURL} alt={contact.name} />
      <div>
        <h4>{contact.name}</h4>
        <p>{truncateMessage(lastMessageText)}</p>
      </div>
      {!isSelected && <span>{contact.unreadCount}</span>}
      <button ref={buttonRef} onClick={handleButtonClick}>⋮</button>
      {showModal && 
        <Modal 
          onClose={() => setShowModal(false)} 
          onAction={handleModalAction} 
          position={modalPosition}
        />
      }
    </div>
  );
};

export default ContactItem;
*/



