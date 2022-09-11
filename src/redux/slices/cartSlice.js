import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProductCart: (state, action) => {
      const { productName, id, price, image } = action.payload;
      const product = {
        id,
        productName,
        price,
        image: image[0].imageOne,
        quantity: 1,
      };

      const duplicateProduct = state.cart.find((productCart) => {
        return productCart.id === action.payload.id;
      });

      if (!duplicateProduct) {
        state.cart.push(product);
      }
    },
    deleteProductCart: (state, action) => {
      const filteredProduct = state.cart.filter((product) => {
        return product.id !== action.payload;
      });
      state.cart = filteredProduct;
    },
    modifyProductCart: (state, action) => {},
  },
});

const { actions, reducer } = cartSlice;

export const { addProductCart, deleteProductCart, modifyProductCart } = actions;
export default reducer;
