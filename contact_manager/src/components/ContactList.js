import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [{
    id:'1',
    name:'test',
    email:'test@email.com',
  }]
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  
  return(
    <div className='ui main'>
      <h2 className='contactlist'>
        Contact List 
      <Link to='/add'>
        <button className='ui button blue right'>Add Contact</button>
        </Link>
      </h2>
      <div className='ui celled list'>{renderContactList}</div>
    </div>
  )
  }
export default ContactList;