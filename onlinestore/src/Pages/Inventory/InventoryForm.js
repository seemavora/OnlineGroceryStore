import axios from 'axios';
import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
}));

function InventoryForm({ getItems }) {
  const classes = useStyles();
  const [itemName, setItemName] = useState('');
  const [itemWeight, setItemWeight] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  async function saveItems(e) {
    e.preventDefault();

    try {
      const itemData = {
        title: itemName,
        weight: itemWeight,
        price: itemPrice,
        quantity: itemQuantity,
        description: itemDescription,
        count:1
      };
      // await axios.post("http://localhost:5000/customer/", itemData);
      await axios.post('http://localhost:5000/item/', itemData);
      getItems();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form
        onSubmit={saveItems}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          //id="outlined-basic"
          label="Item Name"
          variant="outlined"
          type="text"
          // placeholder="Item Name"
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          value={itemName}
        />
        <TextField
          //id="outlined-basic"
          label="Item Weight"
          variant="outlined"
          type="text"
          //placeholder="Item Weight"
          onChange={(e) => {
            setItemWeight(e.target.value);
          }}
          value={itemWeight}
        />
        <TextField
          //id="outlined-basic"
          label="Item Price"
          variant="outlined"
          type="text"
          //placeholder="Item Price"
          onChange={(e) => {
            setItemPrice(e.target.value);
          }}
          value={itemPrice}
        />
        <TextField
          //id="outlined-basic"
          label="Item quantity"
          variant="outlined"
          type="text"
          //placeholder="Item quantity"
          onChange={(e) => {
            setItemQuantity(e.target.value);
          }}
          value={itemQuantity}
        />
        <TextField
          //id="outlined-basic"
          label="Item description"
          variant="outlined"
          type="text"
          //placeholder="Item description"
          onChange={(e) => {
            setItemDescription(e.target.value);
          }}
          value={itemDescription}
        />
        <Button variant="contained" color="primary" type="submit">
          Save new item
        </Button>
        {/* <button type="submit" onSubmit={deleteItems}>Delete Item</button> */}
      </form>
    </div>
  );
}

export default InventoryForm;
