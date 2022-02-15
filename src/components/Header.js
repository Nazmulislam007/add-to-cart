import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/Context";

const Header = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="link-wrapper">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length}) </Link>
      </div>
    </>
  );
};

export default Header;
