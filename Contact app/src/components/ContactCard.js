import React from "react";
import './App.css';

function ContactCard (props){
    const {name , phone , email} = props.contact
    return(
        <div className="items">
            <div className="item">
            <i class="fa-solid fa-user uIcon"></i>
        <div className="content">
            <div className="list-name">{name}</div>
            <div>{phone}</div>
            <div>{email}</div>
        </div>
        </div>
        <div className="icons">
        <i class="fa-solid fa-pen-to-square editIcon"></i>
        <i class="fa-solid fa-trash tIcon"></i>
        </div>
    </div>
    )
};

export default ContactCard;