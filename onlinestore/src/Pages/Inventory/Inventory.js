import React, { useState }  from "react";
import ReactDOM from 'react-dom'
import './Inventory.css';
import Button from "@material-ui/core/Button";

class Inventory extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        items: [
           { ID: 1, Product: 'Chicken Nuggets (20 piece)', Price: '$10.00', Quantity: 1,},
           { ID: 2, Product: 'Broccoli', Price: '$2.00', Quantity: 5 },
           { ID: 3, Product: 'Rice Bags', Price: '$10.00', Quantity: 23 },
           { ID: 4, Product: 'Water Bottles', Price: '$3.00', Quantity: 47 }
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.items[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.items.map((item, index) => {
        const { ID, Product, Price, Quantity, Edit, Delete } = item //destructuring
        return (
           <tr key={ID}>
              <td>{ID}</td>
              <td>{Product}</td>
              <td>{Price}</td>
              <td>{Quantity}</td>
              <td>{Edit}</td>
              <td>{Delete}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 ID='title'>Admin Inventory Table</h1>
           <table ID='items'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

export default Inventory;
