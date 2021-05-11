import axios from "axios";
import React, { useState } from "react";

function InventoryForm({ getItems }) {
  const [itemName, setItemName] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  async function saveItems(e) {
    e.preventDefault();

    try {
      const itemData = {
        name: itemName,
        weight: itemWeight,
        price: itemPrice,
        quantity: itemQuantity,
        description: itemDescription
      };
      // await axios.post("http://localhost:5000/customer/", itemData);
      await axios.post(
        "http://localhost:5000/item/",
        itemData
      );
      getItems();
    } catch (err) {
      console.error(err);
    }
  }



  return (
    <div>
      <form onSubmit={saveItems}>
        <input
          type="text"
          placeholder="Item Name"
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          value={itemName}
        />
         <input
          type="text"
          placeholder="Item Weight"
          onChange={(e) => {
            setItemWeight(e.target.value);
          }}
          value={itemWeight}
        />
         <input
          type="text"
          placeholder="Item Price"
          onChange={(e) => {
            setItemPrice(e.target.value);
          }}
          value={itemPrice}
        />
        <input
          type="text"
          placeholder="Item quantity"
          onChange={(e) => {
            setItemQuantity(e.target.value);
          }}
          value={itemQuantity}
        />
         <input
          type="text"
          placeholder="Item description"
          onChange={(e) => {
            setItemDescription(e.target.value);
          }}
          value={itemDescription}
        />
        <button type="submit">Save new item</button>
        {/* <button type="submit" onSubmit={deleteItems}>Delete Item</button> */}
        
      </form>
    </div>
  );
}

export default InventoryForm;
