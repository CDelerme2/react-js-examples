import { useState } from "react";

export const FilteredListExample = () => {
  const [searchValue, setSearchValue] = useState("");
  const fruitsArray = [
    "Love",
    "Joy",
    "Peace",
    "Patience",
    "Kindness",
    "Goodness",
    "Long-Suffering",
    "Gentleness",
    "Faith",
    "Modesty",
    "Continence",
    "Chastity",
  ];
  const filteredList =
    searchValue.length > 0
      ? fruitsArray.filter((fruit) => {
          return fruit.toLowerCase().includes(searchValue.toLowerCase());
        })
      : [];
  return (
    <>
      <input
        id="searchInput"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Search..."
      />
      <div>
        {filteredList.map((fruit, i) => {
          return <li key={i}>{fruit}</li>;
        })}
      </div>
    </>
  );
};
