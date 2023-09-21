import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

 const [allData , setAllData] = useState([]);
  function getData(data){
    // console.log("hello"+data)    
    setAllData([...allData , data]);
  }
  return (
  <div>
    <Header/>
    <AddContact onSubmit ={getData}/>
     <ContactList allData={allData}/>
  </div>
  );

  }

export default App;
