import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';

function Inventory() {
  const [items, setItem] = useState([]);

  async function getItems() {
    const itemRes = await axios.get('http://localhost:5000/item/');

    setItem(itemRes.data);
  }

  const deleteItem = (index) => {
    let data = [...items];
    data.splice(index, 1);
    setItem( data);
  };

  // async function deleteItems() {
  //   const itemRes = await axios.get("http://localhost:5000/item/deleteItem");

  //    setItem(itemRes.data);
  //  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <InventoryForm getItems={getItems} />
      <InventoryList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default Inventory;
