import React, { useEffect, useState } from "react";
import { useCart } from "../../context/Context";
import SingleProduct from "../SingleProduct";

const Cart = () => {
  const { cart, setCart } = useCart();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, init) => acc + Number(init.price), 0));
  }, [cart]);

  return (
    <>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: ${total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            cart={cart}
            setCart={setCart}
            key={prod.id}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
