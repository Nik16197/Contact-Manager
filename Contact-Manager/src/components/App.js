import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Addcontact from './AddContact';
import ContactList from './ContactList';


function App() {

  // const contact = [

  //   {
  //     id: 1,
  //     "name": "Sukesh",
  //     "email": "sukesh@yahoo.com"
  //   },
  //   {
  //     id: 2,
  //     "name": "Ramesh",
  //     "email": "ramesh@yahoo.com"
  //   }
  // ];

  const [contact, setContact] = useState([]);

  const addContactHandler = (contact_details) => {

    setContact(...contact, contact_details);
  };

  return (
    <div className='ui container'>
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <ContactList contacts={contact} />
    </div>
  );
}

export default App;
