import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
// import { toggleTheme } from "./themeSlice";

// createSlice() generates action creators & action types that correspond to the reducers and state
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const ReduxStoreExample = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(themeSlice.actions.toggleTheme());
  };

  return (
    <div
      style={{
        margin: "48px",
        padding: "24px",
        backgroundColor: theme === "dark" ? "yellow" : "lightYellow",
      }}
    >
      <li>
        Redux is a state management library that for use with any JS library or
        framework
      </li>
      <li>
        An application's <b>State</b>, is a combination of the states of its
        internal components.
      </li>
      <li>
        As an application grows bigger, it may have to share some state between
        components.
      </li>
      <li>
        This task of handling multiple states from multiple components can
        become challenging as the application grows.
      </li>
      <li>
        Redux manages all the application's states and provides APIs to change
        the existing state and query the current state.
      </li>
      <br />
      <button onClick={() => changeTheme()}>Change Theme</button>
    </div>
  );
};
