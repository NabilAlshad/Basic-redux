import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";

const initialState = {
  cart: [],
  products: [
    {
      name: "apple",
      id: 1,
    },
    {
      name: "dell",
      id: 2,
    },
    {
      name: "asus",
      id: 3,
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newId = action.id;
      const newCart = [...state.cart, newId];
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_FROM_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((item, index) => index !== id);
      return {
        ...state,
        cart: remainingCart,
      };
    default:
      return state;
  }
};
export default cartReducer;
