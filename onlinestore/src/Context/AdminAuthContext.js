import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AdminAuthContext = createContext();

function AdminAuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/admin/adminLogin");

    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AdminAuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuthContext;
export { AdminAuthContextProvider };