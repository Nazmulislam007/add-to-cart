export default function reducer(state, { type, payload }) {
  if (type === "INCRIMENT") {
    let IncrimentQuantityProducts = state.products.map((product) => {
      if (product.id === payload) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    return { ...state, products: IncrimentQuantityProducts };
  }

  if (type === "DECRIMENT") {
    let DecrimentQuantityProducts = state.products
      .map((product) => {
        if (product.id === payload) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
      .filter((product) => {
        return product.quantity !== 0;
      });

    return { ...state, products: DecrimentQuantityProducts };
  }

  if (type === "DELETEITEM") {
    let filterProducts = state.products.filter((product) => {
      return product.id !== payload;
    });

    return { ...state, products: filterProducts };
  }

  if (type === "DELETEALL") {
    return {
      ...state,
      products: [],
    };
  }

  if (type === "TOTAL_PRODUCTS") {
    const reduceProducts = state.products.reduce(
      (accum, curr) => {
        accum.totalProducts += curr.quantity;
        accum.totalAmount += curr.quantity * curr.price;
        return accum;
      },
      { totalProducts: 0, totalAmount: 0 }
    );
    console.log(reduceProducts);
    return {
      ...state,
      totalAmount: reduceProducts.totalAmount,
      totalProducts: reduceProducts.totalProducts,
    };
  }

  return state;
}
