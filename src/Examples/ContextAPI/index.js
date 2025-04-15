import React, { useState, createContext, useContext } from "react";

const UserContext = createContext(null);

export const ContextAPIExample = () => {
  const [userName, setUserName] = useState("Carlos Delerme");
  const [count, setCount] = useState(0);

  return (
    <>
      {/* {userName} */}
      <UserContext.Provider value={{ userName, setUserName, count, setCount }}>
        <ChildComponent1 />
        <ChildComponent2 />
        <ChildComponent3 />
        <ChildComponent4 />
      </UserContext.Provider>
    </>
  );
};

export const ChildComponent1 = () => {
  const userContext = useContext(UserContext);
  return (
    <>
      {userContext.userName}
      {/* <GrandChildComponent /> */}
    </>
  );
};

export const ChildComponent2 = () => {
  const userContext = useContext(UserContext);
  return (
    <>
      <button
        onClick={() => {
          userContext.setUserName("Carton Rose");
        }}
      >
        Change userName
      </button>
    </>
  );
};

export const ChildComponent3 = () => {
  const userContext = useContext(UserContext);
  return <>{userContext.count}</>;
};

export const ChildComponent4 = () => {
  const userContext = useContext(UserContext);
  return (
    <>
      <button
        onClick={() => {
          userContext.setCount((prev) => prev + 1);
        }}
      >
        Change Count
      </button>
    </>
  );
};
