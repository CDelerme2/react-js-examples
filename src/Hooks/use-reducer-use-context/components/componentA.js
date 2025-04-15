import { useContext } from "react";
import { exampleContext } from "../example-context";

export const ComponentA = () => {
  const { state, dispatch } = useContext(exampleContext);
  return (
    <div
      style={{
        width: "500px",
        backgroundColor: "lightyellow",
        border: "1px solid black",
        alignItems: "right",
        padding: "2px",
      }}
    >
      ComponentA
      <div>
        <button onClick={() => dispatch({ value: 1, type: "increment" })}>
          +
        </button>
        <button onClick={() => dispatch({ value: 1, type: "decrement" })}>
          -
        </button>
        <button
          onClick={() => dispatch({ value: 2, type: "double" })}
          disabled={state.count === 0}
        >
          x2
        </button>
        <button
          onClick={() => dispatch({ value: 0, type: "reset" })}
          disabled={state.count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ComponentA;
