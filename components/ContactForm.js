import React, { useState } from "react";
import Style from "./../styles/ContactForm.module.css";



const ContactForm = ({ addContact }) => {

  const [popup, setPopup] = useState(false);
  const handleClickOpen = () => {
    setPopup(!popup);
  }

  const closePopup = () => {
    setPopup(false);
  }

  const [name, setName] = useState('');
  const [hpNo, setHpno] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setHpno('');
    setAddress('');
    addContact(name, hpNo, address);

  }


  return (
    <div className={Style.Center}>
      <button onClick={handleClickOpen} class="btn"><i class="fa fa-plus"></i>  Add</button>

      {popup ?
        <div>
          <div className={Style.popup}>

            <form onSubmit={handleSubmit} className={Style.myform}>
              <div class="form-group">

                <label for="exampleFormControlInput1">Name</label>
                <input type="text" value={name} class="form-control" onChange={(e) => setName(e.target.value)} required />

                <label for="exampleFormControlInput1">H/P No</label>
                <input type="text" value={hpNo} class="form-control" onChange={(e) => setHpno(e.target.value)} />

                <label for="exampleFormControlInput1">Address</label>
                <input type="text" value={address} class="form-control" onChange={(e) => setAddress(e.target.value)} />
                <br />
                <input type="submit" value="Add" />

              </div>
            </form>



            <button onClick={closePopup} class="btn" style={{ border: "2px solid black", margin: "10px" }}>Done</button>
          </div>

        </div> : ""}


    </div>
  );
}

export default ContactForm;