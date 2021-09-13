import { useEffect, useReducer } from "react";
import Card from "./component/Card";
import "./component/cart.css";
import { CartContext } from "./component/context/CartContext";
import { products } from "./component/product";
import reducer from "./component/reducer/reducer";

const initialState = {
  item: products,
  totalItem: 0,
  totalAmount: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const removeAll = () => {
    return dispatch({
      type: "REMOVE_ALL",
    });
  };

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

  useEffect(() => {
    return dispatch({
      type: "TOTAL_ITEM",
    });
  }, [state.item]);

  useEffect(() => {
    return dispatch({
      type: "TOTAL_AMOUNT",
    });
  }, [state.item]);

  return (
    <>
      <CartContext.Provider
        value={{
          ...state,
          removeItem,
          removeAll,
          incriment,
          decriment,
        }}
      >
        <Card />
      </CartContext.Provider>
    </>
  );
}

export default App;
