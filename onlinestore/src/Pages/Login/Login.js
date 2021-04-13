import React, {useState } from "react";
import axios from "axios";
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  async function login(e){
    e.preventDefault();

    try{
      const loginData = {
        email, password, 
      };
      await axios.post("http://localhost:5000/auth/login", loginData); //posts on server
    }catch(err){
      console.error(err);
    }
  }
  // render() {
    return (
        <div>
         <h1>
           Login Now! 
         </h1>
         <form onSubmit ={login}>
           <input 
           type = "email" 
           placeholder = "Email"  
           onChange={(e) => setEmail(e.target.value)} 
           value = {email}
           />
           <br/>
           <br/>
           <input type = "password" 
           placeholder = "Password"
           onChange={(e) => setPassword(e.target.value)} 
           value = {password}/>
           <br/>
           <br/>
           <button type = "submit"> Login </button>
         </form>
         {/* add code for Login design here */}
        </div>
    );
  // }
}
 
