import React, { useState } from "react";
import faker from "faker";
import SingleProduct from "../SingleProduct";
faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.nature(),
  }));

  const [products] = useState(productArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Home;
