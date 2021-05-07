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

  useEffect(() => {
    getLoggedIn();
  }, []);

  async function getAdmin() {
    const adminInRes = await axios.get("http://localhost:5000/auth/isAdmin");

    setIsAdmin(adminInRes.data);
  }

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn,isAdmin, getAdmin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };