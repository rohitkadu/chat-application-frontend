// src/components/ContactList.jsx
import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onSelectContact, onModalAction, selectedUser }) => {
  
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactItem 
          key={contact.userId} 
          contact={contact} 
          onSelectContact={onSelectContact}
          onModalAction={onModalAction}
          selectedUser={selectedUser}
        />
      ))}
    </div>
  );
};

export default ContactList;
