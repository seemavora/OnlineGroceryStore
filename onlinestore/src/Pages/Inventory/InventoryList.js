import React, { useState } from 'react';
import axios from 'axios';
import { Table, makeStyles, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
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

function InventoryList({ items, deleteItem }) {
  // const [title, setTitle] = useState(null);
  // async function deleteItems(e) {
  //   // e.preventDefault()
  //   // e.persist();;
  //   console.log('here');
  //   try {
  //     const itemData = {
  //       title,
  //     };
  //     // await axios.post("http://localhost:5000/customer/", itemData);
  //     await axios.delete('http://localhost:5000/item/deleteItem/', itemData);
  //     console.log(itemData);
  //     deleteItems(title);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  function sampleTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table" minWidth="650">
          <TableHead>
            <TableRow>
              
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Item Name</TableCell>
              <TableCell align="center">Item weight &nbsp;(lbs)</TableCell>
              <TableCell align="center">Item price &nbsp;($)</TableCell>
              <TableCell align="center">Item quantity</TableCell>
              <TableCell align="center">Item description</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={item.name}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.weight}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center">{item.description}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteItem(item.title, index)}
                  >
                    <ClearIcon color="error" />
                  </IconButton>
                </TableCell>
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
