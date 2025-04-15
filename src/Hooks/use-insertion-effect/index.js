import { useInsertionEffect } from "react";

export const UseInsertionEffectExample = () => {
  useInsertionEffect(() => {
    // Create a style tag and insert dynamic CSS
    const style = document.createElement("style");
    style.textContent = `
          .dynamic-class {
              color: white;
              background-color:blue;
              padding: 10px;
              font-weight:bold
          }
      `;
    document.head.appendChild(style);

    // Cleanup: Remove the style tag when the component unmounts...
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className="dynamic-class">Styled with useInsertionEffect()</div>
      <li>
        Runs synchronously before any Effect hook and before mutations are made
        to the DOM
      </li>
      <li>
        Used to insert styles to the DOM during rendering to insure they are
        applied immediately (<i>prevents flickering</i>)
      </li>
      <li>Intended for CSS-in-JS libraries</li>
    </>
  );
};
