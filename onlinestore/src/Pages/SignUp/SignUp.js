import React, {useState, useContext } from "react";
import {useHistory } from "react-router-dom";
import axios from "axios";
import './SignUp.css';
import AuthContext from "../../Context/AuthContext";

export default function SignUp() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [passwordVerify, setPasswordVerify] = useState(""); 

  const{getLoggedIn} = useContext(AuthContext);
  const history = useHistory();
  async function register(e){
    e.preventDefault();

    try{
      const registerData = {
        email, password, passwordVerify,
      };
      await axios.post("http://localhost:5000/auth/", registerData); //posts on server
      await getLoggedIn();
      history.push("/inventory");
    }catch(err){
      console.error(err);
    }
  }
  // render() {
    return (
        <div>
         <h1>
           Register Now!
         </h1>
         <form onSubmit ={register}>
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
           <input 
           type = "password" 
           placeholder = "Verify Your Password"
           onChange={(e) => setPasswordVerify(e.target.value)} 
           value = {passwordVerify}
           />
           <br/>
           <br/>
           <button type = "submit"> Register </button>
         </form>
         {/* add code for SignUp design here */}
        </div>
    );
  // }
}
 
