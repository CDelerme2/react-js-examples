// https://www.youtube.com/watch?v=CJUAL18dbKs

export function PolyfillExample() {
  const arr = [1, 2, 3, 4, 5];
  //   arr.forEach((element) => console.log(element * 2));

  // Simulate browser incompatibility
  Array.prototype.forEach = null;

  if (!Array.prototype.forEach) {
    // polyfill code...
    Array.prototype.forEach = function (callbackFunction) {
      // this =  array being called from...
      for (let val of this) callbackFunction(val);
    };
  }

  // arr.forEach((element) => console.log(element * 2));
  function forEachCallbackFunction(element) {
    console.log(element);
  }
  arr.forEach((element) => forEachCallbackFunction(element));

  return (
    <div style={{ border: "1px solid black" }}>
      <p>
        Polyfill are Javascript code that repicates modern functionality in
        older browsers that do not support it.
      </p>
      <p>
        For example, whjen using ES6 features like{" "}
        <code style={{ color: "red" }}>Promise</code> or{" "}
        <code style={{ color: "red" }}>fetch</code>, polyfill code will be
        needed to ensure these features work correctly in IE6.
      </p>
      <p>
        See MSDN Web Docs
        <a
          target="_blank"
          rel="noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#browser_compatibility"
        >
          Arrow Functions
        </a>
        &nbsp;and&nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#browser_compatibility"
        >
          Promises
        </a>
        .
      </p>
    </div>
  );
}
