import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      return {
        loading: false,
        user: null,
      };
    },
  },
});

const { actions, reducer } = userSlice;

export const { loginUser, registerUser, logoutUser } = actions;
export default reducer;
