import React from "react";
import { useCart } from "./context/CartContext";

const Items = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, incriment, decriment } = useCart();

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt={img} />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fas fa-minus minus"
            onClick={() => {
              decriment(id);
            }}
          ></i>
          <input type="text" placeholder={quantity} />
          <i
            className="fas fa-plus add"
            onClick={() => {
              incriment(id);
            }}
          ></i>
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <i
            onClick={() => {
              removeItem(id);
            }}
            className="fas fa-trash-alt add"
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
