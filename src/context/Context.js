import React, { useContext, useState } from "react";

const contextCreate = React.createContext();

export const useCart = () => {
  return useContext(contextCreate);
};

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <contextCreate.Provider value={{ cart, setCart }}>
      {children}
    </contextCreate.Provider>
  );
};

export default ContextProvider;
