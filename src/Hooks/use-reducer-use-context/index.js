import { useReducer } from "react";
import { ComponentA } from "./components/componentA";
import { ComponentB } from "./components/componentB";
import { ComponentC } from "./components/componentC";
import { exampleContext } from "./example-context";

const initialState = { count: 0 };

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    case "double":
      return { count: state.count * action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UseReducerWithUseContextExample = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div
      style={{
        width: "550px",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "12px",
      }}
    >
      <div>COUNT: {state.count}</div>
      {/* Counter 1 */}
      {/* <div>
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
      </div> */}
      <br />
      <exampleContext.Provider value={{ state, dispatch }}>
        <ComponentA />
        <br />
        <ComponentB />
        <br />
        <ComponentC />
      </exampleContext.Provider>
    </div>
  );
};

export default UseReducerWithUseContextExample;
