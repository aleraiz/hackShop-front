import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import cartSlice from "../slices/cartSlice";
import logoutUser from "../slices/userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
});

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

const resetStore = async () => {
  await persistor.purge();
  store.dispatch(logoutUser());
  await persistor.flush();
};

export { persistor, store, resetStore };
