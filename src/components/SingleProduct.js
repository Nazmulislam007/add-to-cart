import React from "react";
import { useCart } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useCart();

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDese">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod.price.substring(0, 3)}</span>
      </div>
      <div className="btn--wrapper">
        {cart.includes(prod) ? (
          <button
            className="remove--btn"
            onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
          >
            Remove to cart
          </button>
        ) : (
          <button className="add--btn" onClick={() => setCart([...cart, prod])}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
