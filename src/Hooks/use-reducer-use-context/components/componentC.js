import { ComponentE } from "./componentE";

export const ComponentC = () => {
  return (
    <div
      style={{
        width: "500px",
        backgroundColor: "lightblue",
        border: "1px solid black",
        padding: "2px",
      }}
    >
      ComponentC
      <ComponentE />
    </div>
  );
};

export default ComponentC;
