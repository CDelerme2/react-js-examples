import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { color: "green", mode: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    changeColor: (currentState, dispatchedAction) => {
      currentState.value = dispatchedAction.payload;
    },
    changeMode: (currentState, dispatchedAction) => {
      currentState.value = dispatchedAction.payload;
    },
  },
});

export const { changeColor, changeMode } = themeSlice.actions;

export default themeSlice.reducer;
