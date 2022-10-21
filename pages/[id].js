import Head from 'next/head';

import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

const Details = () => {

  const router = useRouter();

  console.log(router.query);

  const { id } = router.query;


  const [editingMode, setEditingMode] = useState(false);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('contacts')
    if (data) {
      const contactArray = JSON.parse(data);
      setContact(contactArray.find(element => element.id == id))
    }
  }, []);




  function toggle() {
    setEditingMode(!editingMode)
    if (editingMode)
      savecontact();
  }

  function handleChange(e) {
    setContact(c => ({
      ...c,
      [e.target.name]: e.target.value
    }))
  }

  function savecontact() {



    //fetch data from localStorage
    const oldContacts = localStorage.getItem('contacts')

    //Convert localStorage data to javascript array
    const contactArray = JSON.parse(oldContacts);
    //Find same iD data

    const newContacts = contactArray.map((c) => {
      if (c.id == contact.id)
        return (contact)
      else
        return (c)
    })
    //overwrite the id
    //save data
    localStorage.setItem('contacts', JSON.stringify(newContacts))

  }




  return (

    <div className='container-md'>
      <Head>
        <title>Address Book</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <h1 className='text-center'>Address Book</h1>
      <div className='w-100 d-flex justify-content-center m-3 '>
        <Link href={"/"}><button className='btn btn-primary'>Home</button></Link>
        <button className={editingMode ? 'btn btn-success mx-3 ' : 'btn btn-primary mx-3 '} onClick={toggle} >
          {editingMode ? 'Done' : 'Edit'}
        </button>

      </div>

      {contact ?
        <>
          <div className='row justify-content-center'>
            <div className='col-4'>
              Name
            </div>
            <div className='col-4 text-end'>
              {editingMode ?
                <input name='name' onChange={handleChange} value={contact.name}></input>
                :
                contact.name
              }

            </div>
          </div>


          <div className='row justify-content-center'>
            <div className='col-4'>
              Number
            </div>
            <div className='col-4 text-end'>
              {editingMode ?
                <input name='hpNo' onChange={handleChange} value={contact.hpNo}></input>
                :
                contact.hpNo
              }
            </div>
          </div>



          <div className='row justify-content-center'>
            <div className='col-4'>
              Address
            </div>
            <div className='col-4 text-end'>
              {editingMode ?
                <input name='address' onChange={handleChange} value={contact.address}></input>
                :
                contact.address
              }
            </div>
          </div>
        </>
        : null}

    </div>


  );
}


export default Details;