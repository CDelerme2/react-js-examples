import { createContext, useContext } from "react";
import { UseToggle } from "./useToggle";

const globalStateContext = createContext(null);

export const UseContextExample = () => {
  const [value, toggleValue] = UseToggle(false);
  return (
    <globalStateContext.Provider value={{ value, toggleValue }}>
      <div>
        <h1>PARENT COMPONENT</h1>
        <ChildToggle />
        <ChildDisplay />
      </div>
    </globalStateContext.Provider>
  );
};

const ChildToggle = () => {
  const { toggleValue } = useContext(globalStateContext);
  return (
    <div>
      <button onClick={() => toggleValue((prev) => !prev)}>Toogle State</button>
    </div>
  );
};

const ChildDisplay = () => {
  const { value } = useContext(globalStateContext);
  return (
    <div>
      <p>Current State : {value ? "TRUE" : "FALSE"} </p>
      {/* <ul style={{ fontStyle: "italic" }}> */}
      <li>
        Reads <b>Context</b> values
      </li>
      <li>
        useContext() must be called inside <b>Provider</b>{" "}
      </li>
      <li>Pass Context object to useContext() to read its values</li>
      <li>Prevents prop drilling</li>
      {/* </ul> */}
    </div>
  );
};
