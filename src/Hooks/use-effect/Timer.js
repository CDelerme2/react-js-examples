import { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    console.log("useEffect()", [count, engaged]);
    if (engaged) {
      const intervalId = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else setCount(0);
  }, [count, engaged]);

  return (
    <div
      style={{
        border: "1px solid black",
        width: "10%",
        margin: "0 auto",
        backgroundColor: "white",
      }}
    >
      <button
        style={{ color: engaged ? "red" : "black" }}
        onClick={() => setEngaged(!engaged)}
      >
        {engaged ? "Stop" : "Start"} Timer
      </button>
      <br />
      <span style={{ color: engaged ? "darkgreen" : "black" }}>
        {engaged ? count : 0} seconds
      </span>
    </div>
  );
};
