// import { useState } from "react";

export function GeneratorFunctionsExample() {
  function* greeting(name) {
    yield "hello";
    yield "How are ya?";
    yield name;
  }

  const greet = greeting("Carlos");
  console.log(greet.next().value);
  console.log(greet.next().value);
  console.log(greet.next().value);

  ////////////////////////////////////////////////

  const greet2 = greeting("Carlton");
  for (let text of greet2) {
    console.log(text);
  }

  ////////////////////////////////////////////////

  function* getNumber(num) {
    while (true) yield num++;
  }

  const getNum = getNumber(10);
  console.log(getNum.next().value);
  console.log(getNum.next().value);
  console.log(getNum.next().value);
  console.log(getNum.next().value);
  console.log(getNum.next().value);
  console.log(getNum.next().value);
  console.log(getNum.next().value);

  for (let i = 0; i < 10; i++) {
    console.log(getNum.next().value);
  }

  return (
    <>
      <li>
        Generator functions allow you to define an iterative algorithm by
        writing a single function whose execution is not continuous.
      </li>
      <li>
        {" "}
        Generator functions are written using the{" "}
        <code>
          <b>function*</b>
        </code>{" "}
        syntax.
      </li>

      <li>
        When called, generator functions do not initially execute their code.
        Instead, they return a special type of iterator, called a{" "}
        <strong>Generator</strong>.
      </li>
      <li>
        {" "}
        When a value is consumed by calling the generator's{" "}
        <code>
          <b>next()</b>
        </code>{" "}
        method, the Generator function executes until it encounters the{" "}
        <code>
          <b>yield</b>
        </code>{" "}
        keyword.
      </li>
      <li>
        The function can be called as many times as desired, and returns a new
        Generator each time. Each Generator may only be iterated once.
      </li>
    </>
  );
}
