
import axios from "axios";
import React, { useEffect, useState } from "react";


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
     
    </div>
  );
}

export default Inventory;