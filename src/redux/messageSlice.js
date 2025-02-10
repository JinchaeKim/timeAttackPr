import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};
export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setmessage: (state, action) => {
      state.text = action.payload;
    },
    clearmessage: (state) => {
      state.text = "";
    },
  },
});

export const { setmessage, clearmessage } = messageSlice.actions;
export default messageSlice.reducer;
