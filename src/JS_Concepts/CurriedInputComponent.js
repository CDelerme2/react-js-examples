import { useState } from "react";

///////////////////////////////////////////////

function add(a, b) {
  return a + b;
}

function curriedAdd(a) {
  return (b) => {
    return a + b;
  };
}

const addFive = curriedAdd(2)(3);
console.log(addFive);

///////////////////////////////////////////////

export function CurriedInputComponent() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (fieldName) => (eventObject) => {
    return { [fieldName]: eventObject.target.value };
  };

  // the curried function handleInputChange() takes the first argument (fieldName)...
  const handleChange = (fieldName) => (eventObject) => {
    // then returns a new function that takes the next argument (eventObject), and so on...
    setValues({ ...values, ...handleInputChange(fieldName)(eventObject) });
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        Currying is a functional programming technique where a function with
        multiple arguments is transformed into a series of functions, each
        taking a single argument.
        <p>
          Instead of taking all arguments at once, the curried function takes
          the first argument, returns a new function that takes the next
          argument, and so on until all arguments are provided. The final
          function then returns the result.
        </p>
        <p>
          In simpler terms,{" "}
          <span style={{ fontStyle: "italic" }}>
            currying breaks down a function that takes multiple parameters into
            a chain of functions that each take one parameter.
          </span>
        </p>
      </div>
      <div style={{ backgroundColor: "white", border: "1px solid grey" }}>
        <input
          type="text"
          value={values.firstName}
          onChange={handleChange("firstName")}
        />
        <input
          type="text"
          value={values.lastName}
          onChange={handleChange("lastName")}
        />
        <div>firstName: {values.firstName}</div>
        <div>lastName: {values.lastName}</div>
      </div>
    </div>
  );
}
