import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { CounterComponent } from "./CounterComponent";
import { CurriedInputComponent } from "./CurriedInputComponent";
import { FilterableList } from "./FilterableList";
import { PolyfillExample } from "./Polyfill";
// import Select from "react-select/base";
// import Select from "react-select/base";

const options = [
  { value: 1, label: "Closure" },
  { value: 2, label: "Currying" },
  { value: 3, label: "Memoization" },
  { value: 4, label: "Polyfill" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    padding: "5px 10px",
    border: "1px solid black",
    boxShadow: "0 2px 4px rgba(0,0,0,.2)",
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "hotpink" : "white",
  }),
};

function getChapter(chapterNo) {
  switch (chapterNo) {
    case 1:
      return <CounterComponent />;
    case 2:
      return <CurriedInputComponent />;
    case 3:
      return <FilterableList />;
    case 4:
      return <PolyfillExample />;
    default:
      return null;
  }
}

export default function JS_Concepts() {
  const [chapterNo, setChapterNo] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div
      style={{
        padding: "12px",
        backgroundColor: "lightblue",
        border: "1px solid black",
        margin: "12px",
      }}
    >
      <p>
        <a
          href="https://www.youtube.com/watch?v=JXNZ1pZ1xDg"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          3 JavaScript Concepts that Will Make You A Better React Developer
        </a>
      </p>
      <h4>Select a lesson:</h4>
      <Dropdown
        options={options}
        onChange={(option) => setChapterNo(option?.value)}
        value={options[0]}
        placeholder="Select a tutorial"
      />
      {/* <Select
        options={options}
        styles={customStyles}
        onMenuOpen={() => {}}
        onInputChange={() => {}}
        onMenuClose={() => {}}
        defaultValue={options[0]}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      /> */}
      {getChapter(chapterNo)}
    </div>
  );
}
