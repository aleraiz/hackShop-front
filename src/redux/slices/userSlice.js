import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    loginUser: (state, action) => {
      state.user.push(action.payload);
    },
    registerUser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

const { actions, reducer } = userSlice;

export const { loginUser, registerUser } = actions;
export default reducer;
