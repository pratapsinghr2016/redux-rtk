// store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counterSlices";

const store = configureStore({
  reducer: { counter: counterReducers },
});

export default store;
