import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export default todoSlice.reducer;