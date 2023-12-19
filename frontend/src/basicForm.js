import React, { useState } from "react";
import "./basicForm.css";
console.log(`prashant shinde`)
const BasicForm = () => {
  const[user, setUser] = useState({name:" ",email:" ",password:" "});
  // const[email, setEmail] = useState('');
  // const[password, setPassword] = useState('');
// const [allEntry ,setAllEntry ] = useState([])

let name, value;
  const handleEvent = (event)=>{
    // console.log(name)
  name= event.target.name;
  value= event.target.value;

  setUser({...user , [name]:value});
  }

  const PostData = async(e)=>{
    e.preventDefault();
    const {name, email,password } = user;
  }

  // const submitForm = (e)=>{
  //   // console.log("Name: ",name);
  //   const newEntry ={name :name ,email:email ,password:password};

  //   setAllEntry([allEntry, ...newEntry ])
  //   console.log(allEntry);

  // }
  return (
    <div className="container">
      <form >
        <section className="section">
          <h1>LOGIN FORM</h1>
          <div className="elements">
            <label htmlFor="name"> Name:</label>
            <input type="text" 
              name="name" 
              id="name"
              value={user.name} 
              onChange={handleEvent}
              placeholder="Name"
            />
          </div>
          <div className="elements">
            <label htmlFor="email"> Email:</label>
            <input type="email" 
            name="email"
             id="email"
             value={user.email}
             onChange={handleEvent}
             placeholder="Email"
              />
          </div>
          <div className="elements">
            <label htmlFor="password"> Password:</label>
            <input type="password" name="password" id="password" 
            value={user.password}
            onChange={handleEvent} 
              placeholder="Password"
            />
          </div>
          <div className="elements">
            <button type="submit">Login</button>
          </div>
        </section>
      </form>
      {/* <div>
        {
          allEntry.map((currEle)=>{
            return(
              <div>
              <p>{currEle.name}</p>
              <p>{currEle.email}</p>
              <p>{currEle.password}</p>
              </div>
            )
          })
        }
      </div> */}
    </div>
  );
};

export default BasicForm;
