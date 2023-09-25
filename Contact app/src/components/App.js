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
    // console.log("hello"+data)    
    setAllData([...allData ,{id : crypto.randomUUID(), ...data}]);
  }

  const editContactHandler =(id)=>{  
    // console.log(editedItem)
    // setEditModal(true);
      const editedItem = allData.find((contact)=>{
        return contact.id === id;
      })
      setEditModal(editedItem)
    
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
    <EditContact editData={editModal} trigger={editModal}/>  
    <Header/>
    <AddContact onSubmit ={getData}/>
     <ContactList allData={allData}  editContactId={editContactHandler}  getContactId ={removeContactHandler}/>
       
  </div>
  );

  }

export default App;
