import React, { createContext, useContext, useReducer } from "react";
import { products } from "../product";
import reducer from "../reducer/reducer";

const createCartContext = createContext();

export const useCart = () => {
  return useContext(createCartContext);
};

const initialState = {
  products,
  totalProducts: 0,
  totalAmount: 0,
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incriment = (id) => {
    return dispatch({
      type: "INCRIMENT",
      payload: id,
    });
  };

  const decriment = (id) => {
    return dispatch({
      type: "DECRIMENT",
      payload: id,
    });
  };

  return (
    <createCartContext.Provider value={{ ...state, incriment, decriment }}>
      {children}
    </createCartContext.Provider>
  );
};

export default CartContext;
