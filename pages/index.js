import Head from 'next/head';
import Style from "./../styles/index.module.css"
import Wrapper from '../components/Wrapper.js';
import Title from '../components/Title.js';
import Crud from '../components/Crud.js';
import ContactForm from '../components/ContactForm.js';
import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';






const Index = () => {

  const [contacts,setContacts] = useState(null);

  const addContact = (name,hpNo,address) => {
    setContacts([...contacts, {id:uuidv4(), name, hpNo, address}]);
  }

  const removeContact = (id) => {
    setContacts(contacts.filter(book => book.id !== id));
  }


  function handleEdit(newContact){
    setContacts(old => {
      const filtered = old.filter(cc => cc.id !== newContact.id )
      return [...filtered, newContact]
    });
  }
 
  useEffect(()=>{
    const data = localStorage.getItem('contacts')
    if (data)
     setContacts(JSON.parse(data))
   },[])


  useEffect (() =>{
    if(contacts !== null)
    localStorage.setItem('contacts',JSON.stringify(contacts))
  },[contacts]);

  
  return (

    <div >
      <Head>
        <title>Address Book</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
    
    <Title />
    <br />
    <ContactForm addContact={addContact}/>

    <br />

    

  

    <div className={Style.table}>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">H/P No</th>
                        <th scope="col">Address</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                      { contacts ? 
                      contacts.map((contact,index) => {
                            return(<tr key={contact.id}>
                              <td>{index+1}</td>
                              <td>{contact.name}</td>
                              <td>{contact.hpNo}</td>
                              <td>{contact.address}</td>
                              <td><button class="btn" onClick={()=> removeContact(contact.id)}><i class="fa fa-trash"></i></button></td>
                              <td><Crud data={contact} editHandler={handleEdit}/></td>
  
                              </tr>); 
                            

                      }) : null}
                    
                    
                    </tbody>
                </table>
                
            </div>
            <br></br>
            
      
    </div>

                      

  );

  
}


export default Index;