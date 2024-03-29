import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './SignUp.css';
import AuthContext from "../../Context/AuthContext";
import Button from '@material-ui/core/Button';
import ParticlesBg from 'particles-bg';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [isAdmin, setIsAdmin] = useState("");

  const { getLoggedIn, getIsAdmin } = useContext(AuthContext);
  const history = useHistory();
  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email, password, passwordVerify,isAdmin
      };
      await axios.post("http://localhost:5000/auth/", registerData); //posts on server
      localStorage.setItem("email", email);
      await getLoggedIn();
      // await axios.post("http://localhost:5000/auth/isAdmin", registerData); 
      // await getIsAdmin();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }
  // render() {
  return (
    <div>
      <ParticlesBg num={100} type="square" bg={true} color='#FFFFFF' />
      <div>
        <div className="signup-container">
          <h1 className="signup-text">
            Register Now!
         </h1>
          <form onSubmit={register}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <br />
            <input type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
            <br />
            <br />
            <input
              type="password"
              placeholder="Verify Your Password"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="AdminKey"
              onChange={(e) => setIsAdmin(e.target.value)}
              value={isAdmin}
            />
            <br />
            <br />
            
            <Button type="submit" variant="contained" classes={{ label: 'button-basics' }}> Register </Button>
            <br />
            <br />
          </form>
          <br />
          <br />
        </div>
        <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      </div>
     
    </div>
  );
  // }
}