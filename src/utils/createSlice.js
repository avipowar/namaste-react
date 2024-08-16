const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: () => {
      state.items.length = 0; // its give a empty array []
    },
  },
});

export const { addItem, removeItem, clearCart } = createSlice.actions;

export default createSlice.reducer;
