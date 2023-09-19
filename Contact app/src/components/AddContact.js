import React from "react";
import './App.css';

function AddContact() {
    return (
        <div className="contact-details">
            <h2>Add Contact</h2>
            <form className="contact-form">
                <div className="field">
                    <label>Name<span>*</span></label>
                    <input type="text" name="name" placeholder="Enter your name here" required></input>
                </div>
                <div className="field">
                    <label>Phone Number<span>*</span></label>
                    <input type="tel" name="phone" placeholder="Enter your phone number here" pattern="[0-9]" required></input>
                </div>
                <div className="field">
                    <label>Email Id<span>*</span></label>
                    <input type="email" name="name" placeholder="Enter your email id here" required></input>
                </div>
            </form>
            <button type="submit" value="Submit" className="submit">Add</button>
            {/* <br></br><span>*</span>This field is required. */}
        </div>
       );
}

export default AddContact;