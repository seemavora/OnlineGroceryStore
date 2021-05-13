import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";
import Button from '@material-ui/core/Button';

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    localStorage.clear();
    await getLoggedIn();
    history.push("/");
  }
  return <Button variant="contained" onClick={logOut} className="button-basics">
    Log Out
  </Button>
};

export default LogOutBtn;