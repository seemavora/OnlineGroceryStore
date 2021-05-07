import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './AdminSignUp.css';
import AdminAuthContext from "../../Context/AdminAuthContext";
import Button from '@material-ui/core/Button';
import ParticlesBg from 'particles-bg';

export default function AdminSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const { getLoggedIn } = useContext(AdminAuthContext);
  const history = useHistory();
  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email, password, passwordVerify,accessCode
      };
      await axios.post("http://localhost:5000/admin/", registerData); //posts on server
      await getLoggedIn();
      history.push("/inventory");
    } catch (err) {
      console.error(err);
    }
  }
  // render() {
  return (
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
            onChange={(e) => setAccessCode(e.target.value)}
            value={accessCode}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Insert Admin Code"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
          <br/>
          <br/>
          <Button type="submit" variant="contained" classes={{ label: 'button-basics' }}> Register as Admin </Button>
          <br />
          <br />
        </form>
      </div>
      <ParticlesBg num={100} type="square" bg={true} color='#FFFFFF' />
    </div>
  );
  // }
}

