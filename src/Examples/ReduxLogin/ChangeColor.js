import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/themeSlice";

function ChangeColor() {
  const [mode, setMode] = useState("light");
  const dispatch = useDispatch();
  // No need to keep color value in state
  const colorRef = useRef();

  return (
    <div>
      <div>
        <select ref={colorRef} defaultValue={colorRef?.current?.value}>
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
      {colorRef.current?.value !== "red" && (
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
            dispatch(
              changeColor(
                mode === "dark"
                  ? colorRef.current?.value
                  : "light" + colorRef.current?.value
              )
            );
          }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default ChangeColor;
