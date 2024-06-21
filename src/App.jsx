import React, { useState } from 'react';
import ChatPage from './pages/ChatPage';
import {data} from './data'; 


function App() {
  
  const [contacts, setContacts] = useState(data);
  const [selectedContact, setSelectedContact] = useState(null);

  // console.log(contacts)

  return (
    <>
      <ChatPage />
    </>
  )
}

export default App;