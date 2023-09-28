import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact";

const retriveContacts = ()=>{
  const list = localStorage.getItem("localStorageKey")
  // console.log(list)
  if(list){
    return JSON.parse(localStorage.getItem("localStorageKey"))
  }else{
  return [];
  }
}

function App() {

 const [allData , setAllData] = useState(retriveContacts());
 const [editModal , setEditModal] = useState(false);

  function getData(data){   
    setAllData([...allData ,{id: crypto.randomUUID(), ...data}]);
  }


  const editContactHandler =(id)=>{  
    // console.log(editedItem)
    // setEditModal(true);
      const editedItem = allData.find((contact)=>{
        return contact.id === id;       
      })
      const modalValues = {
        id: editedItem.id,
        name: editedItem.name,
        phone: editedItem.phone,
        email: editedItem.email,
      }
      setEditModal(modalValues)
    
  }

  const editOnChange = (e)=>{
    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value;

    const newFormData = {...editModal}
    newFormData[fieldName] = fieldValue;

    setEditModal(newFormData)
    }

    const editModalSubmit = ()=>{
      // console.log(editModal)
      const {id,name,email} = editModal
      setAllData(allData.map((contact)=>{
        return contact.id === id ? {...editModal} : contact
      }))
      setEditModal(false)
    }

    const closeButtonHandler = ()=> {
      setEditModal(false)
    }



  const removeContactHandler = (id)=>{
    const newContactList =  allData.filter((contact)=>{
      // console.log(contact)
      return contact.id !== id;
    })
    setAllData(newContactList);
  }


 useEffect(()=>{
     localStorage.setItem("localStorageKey",JSON.stringify(allData))
 },[allData]);

  return (
  <div>
    <EditContact editOnChange={editOnChange} editModalSubmit={editModalSubmit} closeButton={closeButtonHandler} editData={editModal} trigger={editModal}/>  
    <Header/>
    <AddContact onSubmit ={getData}/>
     <ContactList allData={allData}  editContactId={editContactHandler}  getContactId ={removeContactHandler}/>
       
  </div>
  );

  }

export default App;
