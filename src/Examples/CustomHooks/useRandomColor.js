import { useState } from "react";

const useRandomColor = () => {
  const [color, setColor] = useState("");
  const changeColor = () =>
    setColor(Math.random().toString(16).substring(2, 8));
  return { color, changeColor };
};

export default useRandomColor;
