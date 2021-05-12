import React, { useState } from 'react';
import axios from 'axios';
import { Table, makeStyles } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function InventoryList({ items }) {
  const [name, setName] = useState(null);
  async function deleteItems(e) {
    // e.preventDefault()
    // e.persist();;
    console.log('here');
    try {
      const itemData = {
        name,
      };
      // await axios.post("http://localhost:5000/customer/", itemData);
      await axios.delete('http://localhost:5000/item/deleteItem/', itemData);
      console.log(itemData);
      deleteItems();
    } catch (err) {
      console.error(err);
    }
  }

  function sampleTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table" minWidth="650">
          <TableHead>
            <TableRow>
              <TableCell align="center">Item Name</TableCell>
              <TableCell align="center">Item weight &nbsp;(lbs)</TableCell>
              <TableCell align="center">Item price &nbsp;($)</TableCell>
              <TableCell align="center">Item quantity</TableCell>
              <TableCell align="center">Item description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.name}>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.weight}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center">{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return <div>{sampleTable()}</div>;
}

export default InventoryList;
