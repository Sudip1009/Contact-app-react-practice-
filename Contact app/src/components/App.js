import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

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

  function getData(data){
    // console.log("hello"+data)    
    setAllData([...allData ,{id : crypto.randomUUID(), ...data}]);
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
    <Header/>
    <AddContact onSubmit ={getData}/>
     <ContactList allData={allData} getContactId ={removeContactHandler}/>
  </div>
  );

  }

export default App;
