import { useRef, useState, useLayoutEffect } from "react";

export const UseLayoutEffectExample = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef();
  const [widthPercentage, setWidthPercentage] = useState(10);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    // Measure the width of the box immediately after rendering...
    if (boxRef.current) {
      const { height } = boxRef.current.getBoundingClientRect();
      setTooltipHeight(height);
      setBoxWidth(boxRef.current.offsetWidth);
    }
  });

  return (
    <div>
      <br />
      <div>
        <li>
          Runs synchronously after all DOM mutations have occured but{" "}
          <b>before </b> the screen repaints
        </li>
        <li>Useful for getting initial State from browser API</li>
        <li>
          Useful for getting sizes and positions for DOM elements immediately
          after changes
        </li>
      </div>
      <br />
      <div
        ref={boxRef}
        title="Rezize Me!"
        style={{
          width: `${widthPercentage}%`,
          height: "auto",
          backgroundColor: "lightblue",
          margin: "auto",
          display:
            widthPercentage.length === 0 || parseInt(widthPercentage) === 0
              ? "none"
              : "",
        }}
      >
        Resize Me!
      </div>
      <input
        size={3}
        id="widthInput"
        value={widthPercentage}
        maxLength={3}
        onChange={(e) => {
          if (
            e.target.value.length === 0 ||
            (!isNaN(parseInt(e.target.value)) &&
              parseInt(e.target.value) <= 100)
          )
            setWidthPercentage(e.target.value);
        }}
      />
      <b>%</b>
      <div>The box width is {boxWidth} pixels</div>
      (Tooltip Height = {tooltipHeight} pixels)
    </div>
  );
};
