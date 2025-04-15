import Login from "./Login";
import Profile from "./Profile";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/userSlice";
import themeReducer from "./features/themeSlice";
import ChangeColor from "./ChangeColor";

const UserStore = configureStore({
  reducer: { user: userReducer, theme: themeReducer },
});

export const ReduxLoginExample = () => {
  return (
    <div style={{}}>
      <Provider store={UserStore}>
        <Profile />
        <Login />
        <ChangeColor />
      </Provider>
    </div>
  );
};
