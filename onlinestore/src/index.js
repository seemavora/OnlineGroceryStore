import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routes'
import './index.css';
import axios from "axios";
import { AuthContextProvider } from './Context/AuthContext';

axios.defaults.withCredentials = true;


// export default function App() {

//   return (
//     <AuthContextProvider>
//       <Routing />
//     </AuthContextProvider>
//   )
// }
function App() {
  return (
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
export default App;

