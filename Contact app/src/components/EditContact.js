import React from "react"; //,{ useEffect }
import './App.css';
// import ContactCard from "./ContactCard";


function EditContact(props) {

        // useEffect(() => {
        //     document.body.style.overflowY = "hidden";
        //     return ()=>{
        //         document.body.style.overflowY = "scroll";
        //     }
        // },[]);






    // const [contacts , setContacts] = useState({
    //     name : "",
    //     phone: "",
    //     email: "",
    //   });
    

    //  const handleOnChange = (event)=>{
    //     setContacts(()=> ({
    //         ...contacts,[event.target.name]: event.target.value,
    //     }))
    //  }

    //  let {name , phone, email} = contacts;
    // const submit = (e)=>{
    //     e.preventDefault();
    // //   console.log(contacts)
    // if(contacts.name === "" || contacts.phone ===""||contacts.email ===""){
    //     alert("All fields are mandatory")
    //     return;
    // }else
    //   props.onSubmit(contacts);
    //   setContacts({
    //     name : "",
    //     phone: "",
    //     email: "",
    //   })

    // }
    // console.log(props.editData)
    const {name , phone , email} = props.editData

    // const {updateContact} = useContext(ContactCard);

    // const updatedContact = {id, name , phone, email}

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
            <button type="submit" name="submit"  className="edit-submit" onClick={props.editModalSubmit}>Submit</button>
            <button type="submit" name="submit"  className="edit-submit">Close</button>
            
            {/* <br></br><span>*</span>This field is required. */}
        </div>
        </div>
       ) : "";
}

export default EditContact;