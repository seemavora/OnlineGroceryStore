import React, { Component } from "react";
import './Inventory.css';
import LogOutBtn from "../../Components/Buttons/LogOutBtn";
class Inventory extends Component {
  render() {
    return (
        <div>
         <h1>
           Inventory
         <LogOutBtn/>
         </h1>
         {/* add code for Inventory design here */}
        </div>
    );
  }
}
 
export default Inventory;