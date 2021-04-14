import React, {useState, useContext } from "react";
import {useHistory } from "react-router-dom";
import axios from "axios";
import './Login.css';
import ParticlesBg from 'particles-bg';
import AuthContext from "../../Context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const{getLoggedIn} = useContext(AuthContext);

  const history = useHistory();
  async function login(e){
    e.preventDefault();

    try{
      const loginData = {
        email, password, 
      };
      await axios.post("http://localhost:5000/auth/login", loginData); //posts on server
      await getLoggedIn();
      history.push("/inventory");
    }catch(err){
      console.error(err);
    }
  }
  // render() {
    return (
      <div>
        <div className = "login-container">
         <h1 className = "login-text">
           Login Now! 
         </h1>
         <form className = "form" onSubmit ={login}>
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
        </div>
         
         <ParticlesBg num={100} type="fountain" bg={true} />

         </div>
    );
  // }
}
 
