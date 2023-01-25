import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from './components/Header';
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import { useHistory } from 'react-router-dom';


 

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/add' 
        element={() => (
          <AddContact addContactHandler={addContactHandler} /> 

        )}
        />
        <Route path='/' element={<ContactList />} /> 
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  ); 
}

export default App;