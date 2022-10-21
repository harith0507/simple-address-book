import Head from 'next/head';
import Style from "./../styles/index.module.css"

import ContactForm from '../components/ContactForm.js';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';





const Index = () => {

  const [contacts, setContacts] = useState(null);

  const addContact = (name, hpNo, address) => {
    setContacts([...contacts, { id: uuidv4(), name, hpNo, address }]);
  }

  const removeContact = (id) => {
    setContacts(contacts.filter(contacts => contacts.id !== id));
  }




  useEffect(() => {
    const data = localStorage.getItem('contacts')
    if (data)
      setContacts(JSON.parse(data))
  }, [])


  useEffect(() => {
    if (contacts !== null)
      localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  return (

    <div >
      <Head>
        <title>Address Book</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <h1 className='text-center'>Address Book</h1>
      <div className='w-100 d-flex justify-content-center m-3 '>
        <ContactForm addContact={addContact} />


      </div>





      <div className={Style.table}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope='col'>Delete</th>

            </tr>
          </thead>
          <tbody>
            {contacts ?
              contacts.map((contact, index) => {
                return (

                  <tr key={contact.id}>

                    <td>{index + 1}</td>
                    <td><Link href={'/' + contact.id}>{contact.name}</Link></td>
                    <td> <button value onClick={() => removeContact(contact.id)} class="btn"><i class="fa fa-trash"></i></button></td>


                  </tr>
                );


              }) : null}


          </tbody>
        </table>

      </div>
      <br></br>


    </div>



  );


}


export default Index;