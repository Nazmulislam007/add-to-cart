import React, { createContext, useContext, useEffect, useReducer } from "react";
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

  const deleteItem = (id) => {
    return dispatch({
      type: "DELETEITEM",
      payload: id,
    });
  };

  const deleteAll = () => {
    return dispatch({
      type: "DELETEALL",
    });
  };

  useEffect(() => {
    return dispatch({
      type: "TOTAL_PRODUCTS",
    });
  }, [state.products]);

  return (
    <createCartContext.Provider
      value={{ ...state, incriment, decriment, deleteItem, deleteAll }}
    >
      {children}
    </createCartContext.Provider>
  );
};

export default CartContext;
