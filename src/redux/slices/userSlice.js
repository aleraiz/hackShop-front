import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    createUser: (state, action) => {},
    registerUser: (state, action) => {},
  },
});

const { actions, reducer } = userSlice;

export const { createUser, registerUser } = actions;
export default reducer;
