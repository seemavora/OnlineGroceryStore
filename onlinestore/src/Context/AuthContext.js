import React, {createContext, useEffect, userState} from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = userState(undefined);
  async function getLoggedIn(){
    const loggedInRes = await axios.get("http://localhost:5000/auth/");
    setLoggedIn= (loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []); //empty dependency array does not rerun (only once when it is first created)
  return 
  <AuthContext.Provider value = {{loggedIn, getLoggedIn}}>
    {props.children}
  </AuthContext.Provider>
};

export default AuthContext;
export {AuthContextProvider};