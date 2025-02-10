import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};
const MessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.text = action.payload;
    },
    resetMessage: (state) => {
      state.text = "";
    },
  },
});

export const { setMessage, resetMessage } = MessageSlice.actions;
export default MessageSlice.reducer;
