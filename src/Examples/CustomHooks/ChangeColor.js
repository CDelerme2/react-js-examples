import useRandomColor from "./useRandomColor";

export const ChangeColor = () => {
  const { color, changeColor } = useRandomColor();
  return (
    <div
      style={{
        border: "1px solid black",
        width: "500px",
        height: "200px",
        backgroundColor: "#" + color,
      }}
    >
      <button onClick={() => changeColor()}>Change Color</button>
    </div>
  );
};
