import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const payload = {
    name: "Carlton Rose",
    age: 47,
    email: "c.rose@carltonrose.com",
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login(payload));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
