// https://www.youtube.com/watch?v=K5i9zMzVlzM

export function ShadowDOMExample() {
  console.log("ShadowDOMExample");

  const element = document.createElement("div");
  const shadowRoot = element.attachShadow({ mode: "open" });
  shadowRoot.innerHTML = "<h1> I BELONG TO SHADOW DOM</h1>";

  const container = document.querySelector("body");
  container.appendChild(element);

  console.log(document.querySelectorAll("h1").length);
  console.log(
    "document.querySelectorAll('h1')[0].textContent",
    document.querySelectorAll("h1")[0].textContent
  );

  console.log(
    "element.shadowRoot.querySelectorAll('h1').length :  ",
    element.shadowRoot.querySelectorAll("h1").length
  );
  console.log(
    "element.shadowRoot.H1[0] textContent",
    element.shadowRoot.querySelectorAll("h1")[0].textContent
  );

  return (
    <>
      <li style={{ border: "1px solid black" }}>
        The Shadow DOM is a Web API that provides a way to attach a hidden DOM
        to a DOM element. {document.querySelectorAll("h1").length}
      </li>
      <li style={{ border: "1px solid black" }}>
        CSS styles do not leak into Shadow DOM tree elements
      </li>
      <h1> I BELONG TO LIGHT DOM</h1>
    </>
  );
}
