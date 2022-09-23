import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    welcomeModalVisibility: true,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.loading = false;
      state.user = null;
    },
    toggleWelcomeModal: (state, action) => {
      state.welcomeModalVisibility = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { loginUser, registerUser, logoutUser, toggleWelcomeModal } = actions;
export default reducer;
