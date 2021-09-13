const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curnt) => {
        return curnt.id !== action.payload;
      }),
    };
  }

  if (action.type === "REMOVE_ALL") {
    return {
      ...state,
      item: [],
    };
  }

  if (action.type === "INCRIMENT") {
    let items = state.item.map((curnt) => {
      if (curnt.id === action.payload) {
        return {
          ...curnt,
          quantity: curnt.quantity + 1,
        };
      }
      return curnt;
    });
    return {
      ...state,
      item: items,
    };
  }

  if (action.type === "DECRIMENT") {
    const items = state.item
      .map((curnt) => {
        if (curnt.id === action.payload) {
          return {
            ...curnt,
            quantity: curnt.quantity - 1,
          };
        }
        return curnt;
      })
      .filter((cur) => {
        return cur.quantity !== 0;
      });
    return {
      ...state,
      item: items,
    };
  }

  if (action.type === "TOTAL_ITEM") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curnt) => {
        let { quantity, price } = curnt;
        accum.totalItem += quantity;

        let updatedtotalAmount = quantity * price;
        accum.totalAmount += updatedtotalAmount;

        return accum;
      },
      { totalItem: 0, totalAmount: 0 }
    );
    return {
      ...state,
      totalItem,
      totalAmount,
    };
  }

  return state;
};

export default reducer;
