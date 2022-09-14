import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProductCart: (state, action) => {
      const { productName, id, price, image, stock } = action.payload.productDetail;
      const product = {
        id,
        productName,
        price,
        stock,
        image: image[3].imageDetailOne,
        quantity: action.payload.quantityProduct,
      };

      const duplicateProduct = state.cart.find((productCart) => {
        return productCart.id === action.payload.productDetail.id;
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
    incrementQuantity: (state, action) => {
      const searchProduct = state.cart.findIndex((product) => {
        return product.id === action.payload.productId;
      });

      state.cart[searchProduct].quantity++;
    },
    decrementQuantity: (state, action) => {
      const searchProduct = state.cart.findIndex((product) => {
        return product.id === action.payload.productId;
      });
      if (state.cart[searchProduct].quantity > 1) {
        state.cart[searchProduct].quantity--;
      }
    },
    emptyCart: (state, action) => {
      state.cart = [];
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  addProductCart,
  deleteProductCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} = actions;
export default reducer;
