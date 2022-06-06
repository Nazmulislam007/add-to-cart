export default function reducer(state, { type, payload }) {
  if (type === "INCRIMENT") {
    let products = state.products.map((product) => {
      if (product.id === payload) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    return { ...state, products: products };
  }

  if (type === "DECRIMENT") {
    let products = state.products.map((product) => {
      if (product.id === payload) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    return { ...state, products: products };
  }

  return state;
}
