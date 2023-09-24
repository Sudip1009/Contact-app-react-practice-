import React,{ useState} from "react";
import './App.css';
// import ContactCard from "./ContactCard";

function AddContact(props) {
    
    const [contacts , setContacts] = useState({
        name : "",
        phone: "",
        email: "",
      });
    

     const handleOnChange = (event)=>{
        setContacts(()=> ({
            ...contacts,[event.target.name]: event.target.value,
        }))
     }

     let {name , phone, email} = contacts;
    const submit = (e)=>{
        e.preventDefault();
    //   console.log(contacts)
    if(contacts.name === "" || contacts.phone ===""||contacts.email ===""){
        alert("All fields are mandatory")
        return;
    }else
      props.onSubmit(contacts);
      setContacts({
        name : "",
        phone: "",
        email: "",
      })

    }


    return (
        <div className="contact-details">
            <h2>Add Contact</h2>
            <form className="contact-form">
                <div className="field">
                    <label>Name<span>*</span></label>
                    <input 
                    type="text" 
                    name="name" 
                    value={name}      
                    onChange = {handleOnChange}
                    placeholder="Enter your name here" 
                    required></input>
                </div>
                <div className="field">
                    <label>Phone Number<span>*</span></label>
                    <input type="tel" name="phone" placeholder="Enter your phone number here" value={phone}  pattern="[0-9]" 
                    onChange = {handleOnChange}
                    required></input>
                </div>
                <div className="field">
                    <label>Email Id<span>*</span></label>
                    <input type="email" name="email" placeholder="Enter your email id here" value={email}
                    onChange = {handleOnChange}
                    required></input>
                </div>
            </form>
             <button type="submit" name="submit" onClick={submit} className="submit">Add</button>
            
            {/* <br></br><span>*</span>This field is required. */}
        </div>
       );
}

export default AddContact;