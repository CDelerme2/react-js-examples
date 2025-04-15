import { ComponentF } from "./componentF";

export const ComponentE = () => {
  return (
    <div
      style={{
        width: "400px",
        backgroundColor: "pink",
        border: "1px solid black",
        margin: "8px",
        padding: "2px",
      }}
    >
      ComponentE
      <ComponentF />
    </div>
  );
};

export default ComponentE;
