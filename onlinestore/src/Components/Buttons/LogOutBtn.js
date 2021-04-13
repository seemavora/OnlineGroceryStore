import React, {useContext} from "react";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";

function LogOutBtn(){
const{getLoggedIn} = useContext(AuthContext);
  async function logOut(){
    await axios.get("http://localhost:5000/auth/logout");
    getLoggedIn();
  }
  return <button onClick = {logOut}>
    Log Out
  </button>
};

export default LogOutBtn;