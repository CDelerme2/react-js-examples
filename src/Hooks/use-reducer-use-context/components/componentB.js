import { ComponentD } from "./componentD";

export const ComponentB = () => {
  return (
    <div
      style={{
        width: "500px",
        backgroundColor: "aqua",
        border: "1px solid black",
        padding: "2px",
      }}
    >
      ComponentB
      <ComponentD />
    </div>
  );
};

export default ComponentB;
