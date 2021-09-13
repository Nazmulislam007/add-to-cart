import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useCart } from "./context/CartContext";
import Items from "./Items";

const Card = () => {
  const { item, removeAll, totalItem, totalAmount } = useCart();

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shoping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span>
          items.
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curnt) => {
                return <Items key={curnt.id} {...curnt} />;
              })}
            </Scrollbars>
          </div>
          <div className="card-total">
            <h3>
              card total : <span>{totalAmount}</span>
            </h3>
            <button>checkout</button>
            <button
              onClick={() => {
                removeAll();
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
