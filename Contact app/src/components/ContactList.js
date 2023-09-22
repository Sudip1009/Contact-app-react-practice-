import React from "react";
import './App.css';
import ContactCard from './ContactCard';

function ContactList(props) {

    const deleteContactHandler= (id) => {
        props.getContactId(id)
    };

    const renderContactList = props.allData.map((contact)=>{
        return (
            <ContactCard contact={contact} deleteHandler={deleteContactHandler} key={contact.id}></ContactCard>
        )
    });
    return (
        <div className="contactList">
            <h2  className="contactHead">Contact List</h2>
            {renderContactList}
        </div>
       );
}

export default ContactList;