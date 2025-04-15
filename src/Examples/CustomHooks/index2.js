import DocTitleOne from "./DocTitleOne";
import DocTitleTwo from "./DocTitleTwo";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import UserForm from "./UserForm";

export const CustomHooksExample2 = () => {
  return (
    <>
      <div
        style={{
          padding: "12px",
          backgroundColor: "lightyellow",
          border: "1px solid black",
        }}
      >
        <h4>useDocumentTitle</h4>
        <DocTitleOne />
        <DocTitleTwo />
      </div>

      <div
        style={{
          padding: "12px",
          backgroundColor: "lightblue",
          border: "1px solid black",
        }}
      >
        <h4>useCounter</h4>
        <CounterOne />
        <CounterTwo />
      </div>

      <div
        style={{
          padding: "12px",
          backgroundColor: "orange",
          border: "1px solid black",
        }}
      >
        <h4>useInput</h4>
        <UserForm />
      </div>
    </>
  );
};
