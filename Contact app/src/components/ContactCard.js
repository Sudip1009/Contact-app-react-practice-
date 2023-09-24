import React from "react";
import './App.css';

function ContactCard (props){
    const {id ,name , phone , email} = props.contact
    return(
        <div className="items">
            <div className="item">
            <i className="fa-solid fa-user uIcon"></i>
        <div className="content">
            <div className="list-name">{name}</div>
            <div>{phone}</div>
            <div>{email}</div>
        </div>
        </div>
        <div className="icons">
        <i className="fa-solid fa-pen-to-square editIcon"  onClick ={()=> props.editHandler(id)}></i>
        <i className="fa-solid fa-trash tIcon" onClick ={()=> props.deleteHandler(id)}></i>
        </div>
    </div>
    )
};

export default ContactCard;