// src/pages/ChatPage.jsx
import React, { useState } from 'react';
import { data } from '../data';
import ContactList from '../components/ContactList';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  const [contacts, setContacts] = useState(data);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSelectContact = (userId) => {
    const contact = contacts.find(contact => contact.userId === userId);
    setSelectedContact(contact);
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.userId === userId ? { ...contact, unreadCount: 0 } : contact
      )
    );
  };

  const handleModalAction = (userId, action) => {
    if (action === 'markAsUnread') {
      setContacts(prevContacts =>
        prevContacts.map(contact =>
          contact.userId === userId ? { ...contact, unreadCount: 1 } : contact
        )
      );
    } else if (action === 'delete') {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.userId !== userId)
      );
    }
  };

  return (
    <div className="chat-page">
      <ContactList 
        contacts={contacts} 
        onSelectContact={handleSelectContact}
        onModalAction={handleModalAction}
      />
      {selectedContact && <ChatWindow user={selectedContact} chat={selectedContact.chat} />}
    </div>
  );
};

export default ChatPage;


/*
import React, { useState } from 'react';
import { data } from '../data';
import ContactList from '../components/ContactList';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  const [contacts, setContacts] = useState(data);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSelectContact = (userId) => {

    const contact = contacts.find(contact => contact.userId === userId);
    setSelectedContact(contact);


    setSelectedContact(userId);
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.userId === userId ? { ...contact, unreadCount: 0 } : contact
      )
    );
  };


  const handleModalAction = (userId, action) => {
    if (action === 'markAsUnread') {
      setContacts(prevContacts =>
        prevContacts.map(contact =>
          contact.userId === userId ? { ...contact, unreadCount: 1 } : contact
        )
      );
    } else if (action === 'delete') {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.userId !== userId)
      );
    }
  };

  const selectedChat = contacts.find(contact => contact.userId === selectedContact)?.chat || [];

  return (
    <div className="chat-page">
      <ContactList 
        contacts={contacts} 
        onSelectContact={handleSelectContact}
        onModalAction={handleModalAction}
      />
      
      {selectedContact && <ChatWindow user={selectedContact} chat={selectedChat} />}
      
    </div>
  );
};

export default ChatPage;
*/

