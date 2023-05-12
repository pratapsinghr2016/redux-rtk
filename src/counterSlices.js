import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  obj: null,
};

let callAPI = async ({ url }) => {
  let res = await fetch(url);
  res = await res.json();
  return res;
};

export const getData = createAsyncThunk("get/data", async () => {
  let result = await callAPI({
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });
  return result;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incBy: (state, action) => {
      state.count += action.payload.value;
    },
  },
  extraReducers(builder) {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.obj = action.payload;
    });
  },
});

export const { increment, decrement, incBy } = counterSlice.actions;

export default counterSlice.reducer;
