import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useCart } from "./Context/CartContext";

const App = () => {
  const {
    products,
    totalAmount,
    totalProducts,
    incriment,
    decriment,
    deleteItem,
    deleteAll,
  } = useCart();

  return (
    <>
      <header>
        <div className="continue-shopping">
          <h1>
            <a href="/">Shopping cart</a>
          </h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalProducts} </span>
            items.
          </p>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalProducts}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {products.map(
                ({ id, title, description, price, img, quantity }) => (
                  <div key={id} className="items-info">
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
                        onClick={() => decriment(id)}
                      ></i>
                      <input type="text" placeholder={quantity} />
                      <i
                        className="fas fa-plus add"
                        onClick={() => incriment(id)}
                      ></i>
                    </div>
                    <div className="price">
                      <h3>{price}</h3>
                    </div>
                    <div className="remove-item">
                      <i
                        className="fas fa-trash-alt add"
                        onClick={() => deleteItem(id)}
                      ></i>
                    </div>
                  </div>
                )
              )}
            </Scrollbars>

            <hr />
          </div>
          <div className="card-total">
            <h3>
              card total : <span>{totalAmount}</span>
            </h3>
            <button>checkout</button>
            <button onClick={deleteAll}>Clear All</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
