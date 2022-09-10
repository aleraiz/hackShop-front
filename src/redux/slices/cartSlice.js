import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProductCart: (state, action) => {},
    deleteProductCart: (state, action) => {},
    modifyProductCart: (state, action) => {},
  },
});

const { actions, reducer } = cartSlice;

export const { addCart, deleteItemCart, modifyCart } = actions;
export default reducer;
