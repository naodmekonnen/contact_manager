import React, { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactCard from './components/ContactCard';
import ContactList from './components/ContactList';
import Header from './components/Header';


function App() {

const [contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {
  console.log(contact)
}
  
  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
