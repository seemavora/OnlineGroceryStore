import React, { Component } from "react";
import product_card from "../CustomerInventory/product_data";

const MainContent = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="card" key="item.id">
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          <span>{item.currency}</span>
          {item.price}
        </p>
        <div className="btn">Add to Cart</div>
      </div>
    </div>
  ));
  return <div className="main_content">{listItems}</div>;
};
export default MainContent;
