import React from "react";

function InventoryList({ items }) {
  function renderItems() {
    return items.map((item, i) => {
      return <li key={i}>
      {item.name}, {item.weight}, {item.price}, {item.description}, {item.quantity}
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