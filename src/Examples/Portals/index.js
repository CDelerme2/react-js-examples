import { createPortal } from "react-dom";

export const CreatePortalExample = () => {
  return (
    <>
      <li>
        Portals allow components to render some of their children into a
        different place in the DOM.{" "}
      </li>
      <li>
        This lets a part of a component “escape” from whatever containers it may
        be in.
      </li>
      <div
        style={{
          backgroundColor: "yellow",
          border: "1px red solid",
          width: "500px",
          margin: "auto",
        }}
      >
        <p>
          This yellow child div is placed in the Parent (<b>root</b>) div.
        </p>
        {createPortal(
          <div
            style={{
              backgroundColor: "red",
              border: "1px blue solid",
              width: "500px",
              color: "white",
              margin: "auto",
              padding: "8px",
            }}
          >
            This red div is placed in the document body.
          </div>,
          document.getElementById("modal-portal")
        )}
        {/* <button>yellow div button</button> */}
      </div>
    </>
  );
};
