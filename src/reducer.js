export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "INCREASE_AMOUNT":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const quantity = item.quantity + 1;
            return {
              ...item,
              quantity: quantity,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };

    case "DECREASE_AMOUNT":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const quantity = item.quantity - 1;
            return {
              ...item,
              quantity: quantity > 0 ? quantity : 0,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };

    case "ADD_TO_CART": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: ++orderItem.quantity,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }

    case "HANDLE_CART_SHOW":
      return {
        ...state,
        isCartShow: !state.isCartShow,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };

    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };

    default:
      return state;
  }
}
