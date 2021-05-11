
import axios from "axios";
import React, { useEffect, useState } from "react";
import InventoryForm from "./InventoryForm";
import InventoryList from "./InventoryList";

function Inventory() {
  const [items, setItem] = useState([]);

  async function getItems() {
   const itemRes = await axios.get("http://localhost:5000/item/");
   
    setItem(itemRes.data);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <InventoryForm getItems={getItems} />
      <InventoryList items={items} />
    </div>
  );
}

export default Inventory;