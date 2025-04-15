import React from "react";
import { useUserStore } from "./useUserStore";

export function UserProfile() {
  const { user, login, logout } = useUserStore();
  //   console.log("UserProfile()", { user, login, logout });
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Login</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
