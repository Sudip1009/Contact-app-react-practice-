import React from "react";
import './App.css';


function EditContact(props) {


    const {name , phone , email} = props.editData

    return (props.trigger) ? (
        <div className="box">
        <div className="edit-contact-details">
            <h2>Edit Contact</h2>
            <form className="edit-contact-form">
                <div className="field">
                    <label>Name<span>*</span></label>
                    <input 
                    type="text" 
                    name="name"      
                    placeholder="Enter your name here" 
                    value={name}
                    onChange={props.editOnChange}
                    required></input>
                </div>
                <div className="field">
                    <label>Phone Number<span>*</span></label>
                    <input type="tel" name="phone" placeholder="Enter your phone number here" pattern="[0-9]" value={phone} onChange={props.editOnChange}
                    required></input>
                </div>
                <div className="field">
                    <label>Email Id<span>*</span></label>
                    <input type="email" name="email" placeholder="Enter your email id here" value={email} onChange={props.editOnChange}
                    required></input>
                </div>
            </form>
            <button type="submit" name="submit" title="submit" className="edit-submit" onClick={props.editModalSubmit}>Submit</button>
            <button type="submit" name="submit" title="close"  className="edit-submit" onClick={props.closeButton}>Close</button>
        </div>
        </div>
       ) : "";
}

export default EditContact;