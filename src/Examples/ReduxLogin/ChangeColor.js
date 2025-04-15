import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/themeSlice";

function ChangeColor() {
  const [color, setColor] = useState("green");
  const [mode, setMode] = useState("light");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <select onChange={(e) => setColor(e.target.value)} defaultValue={color}>
          {mode === "dark" && <option value="red">Red</option>}
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      Mode:
      <input
        type="radio"
        value="dark"
        name="mode"
        checked={mode === "dark"}
        onChange={(e) => setMode(e.target.value)}
      />
      Dark
      {color !== "red" && (
        <span>
          <input
            type="radio"
            value="light"
            name="mode"
            checked={mode === "light"}
            onChange={(e) => setMode(e.target.value)}
          />
          Light
        </span>
      )}
      <div>
        <button
          onClick={(e) => {
            console.log(mode === "dark" ? color : "light" + color);
            dispatch(changeColor(mode === "dark" ? color : "light" + color));
          }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default ChangeColor;
