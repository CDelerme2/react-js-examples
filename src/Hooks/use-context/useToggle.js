import { useState } from "react";

// Custom hook - By sepearting business logic from hooks,
// this behavior can be inported and used across any component

export const UseToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => {
    setValue((previousValue) => !previousValue);
  };
  return [value, toggleValue];
};

// import { UseToggle } from "./useToggle";
// const [value, toggleValue] = UseToggle(false);
