import React from "react";
import './App.css';

function AddContact() {
    return (
        <div className="contact-details">
            <h2>Add Contact</h2>
            <form className="contact-form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name here"></input>
                </div>
                <div className="field">
                    <label>Email Id</label>
                    <input type="email" name="name" placeholder="Enter your email id here"></input>
                </div>
            </form>
            <button className="submit">Add</button>
        </div>
       );
}

export default AddContact;