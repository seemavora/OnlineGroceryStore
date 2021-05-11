import React, {useState} from "react";
import axios from 'axios';

function InventoryList({ items }) {
  const [name, setName] = useState(null);
  async function deleteItems(e) {
    // e.preventDefault()
    // e.persist();;
    console.log('here');
    try {
      const itemData = {
        name
      };
      // await axios.post("http://localhost:5000/customer/", itemData);
      await axios.delete(
        "http://localhost:5000/item/deleteItem/",
        itemData
      );
      console.log(itemData);
      deleteItems();
    } catch (err) {
      console.error(err);
    }
  }
  function renderItems() {
    return items.map((item, i) => {
      return <li key={i}>
      {item.name}, {item.weight}, {item.price}, {item.description}, {item.quantity}
      <button onClick={(e) => deleteItems(item.name)}> Delete Item </button>
      </li>;
      
    });
  }

  return (
    <div>
      <ul>{renderItems()}</ul>
    </div>
  );
}

export default InventoryList;