import Style from "./../styles/Crud.module.css";
import React, { useState } from "react";

const Crud = ({ data, editHandler }) => {

    console.log(data)
    const [name, setName] = useState(data.name);
    const [hpNo, setHpno] = useState(data.hpNo);
    const [address, setAddress] = useState(data.address);


    const [popup, setPopup] = useState(false);
    const handleClickOpen = () => {
        setPopup(!popup);
    }

    const closePopup = () => {
        setPopup(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editHandler({
            id: data.id,
            name,
            hpNo,
            address
        });
    }

    return (

        <div className={Style.app}>

            <button onClick={handleClickOpen} class="btn"><i class="fa fa-pencil"></i></button>
            <div>
                {popup ?
                    <div>
                        <div className={Style.popup}>

                            <form onSubmit={handleSubmit}>
                                <div class="form-group">

                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text" value={name} class="form-control" onChange={(e) => setName(e.target.value)} required />

                                    <label for="exampleFormControlInput1">H/P No</label>
                                    <input type="text" value={hpNo} class="form-control" onChange={(e) => setHpno(e.target.value)} />

                                    <label for="exampleFormControlInput1">Address</label>
                                    <input type="text" value={address} class="form-control" onChange={(e) => setAddress(e.target.value)} />
                                    <input type="submit" value="Edit" />

                                </div>
                            </form>



                            <button onClick={closePopup} class="btn">Close</button>
                        </div>
                        <div>

                        </div>

                    </div> : ""}
            </div>

        </div>
    );
}

export default Crud;