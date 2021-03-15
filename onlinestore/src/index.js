import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routes'
import './index.css';



export default function App(props) {

  return (
      <Routing />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

