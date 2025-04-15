import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

// createSlice() generates action creators & action types that correspond to the reducers and state
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    login: (currentState, dispatchedAction) => {
      currentState.value = dispatchedAction.payload;
    },

    logout: (currentState) => {
      currentState.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
