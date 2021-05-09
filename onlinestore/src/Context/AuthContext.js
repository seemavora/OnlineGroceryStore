import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(undefined);
  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");

    setLoggedIn(loggedInRes.data);
   
  }

  async function getIsAdmin() {
    const email = localStorage.getItem("email");
    const isAdminRes = await axios.post("http://localhost:5000/auth/isAdmin", {email})
     .then((res)=>{
      console.log(res);
      return res;
     });
console.log(isAdminRes);
    setIsAdmin(isAdminRes.data.status);
  }
  useEffect(() => {
    getLoggedIn(); 
  }, []);

  useEffect(() => {
    getIsAdmin();
  });




  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn, isAdmin, getIsAdmin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };