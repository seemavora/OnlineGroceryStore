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
  const [title, setTitle] = useState(null);
  // async function deleteItemsBackend() {
  //   // e.preventDefault()
  //   // e.persist();;
  //   console.log('here');
  //   try {
  //     const itemData = {
  //       title,
  //     };
  //     await axios.delete('http://localhost:5000/item/deleteItem/',title);
   
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const deleteItem = async (title,index) => {
    let data = [...items];
    data.splice(index, 1);
    setItem( data);
    try {
      await axios.delete('http://localhost:5000/item/deleteItem/',{ data: { title: title }});

    } catch (err) {
      console.error(err);
    }
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
