import { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

export const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  // Functions incAge() & incSalary() are recreated (i.e. they "change") whenever ParentComponent re-renders
  // Without useCallback(), Child components that receive function props are re-rendered unnecessarily

  // A new incAge() function  will only be returned if age has changed
  const incAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  // A new incSalary() function  will only be returned if salary has changed
  const incSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
