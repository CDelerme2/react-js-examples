import React from "react";
import useInput from "./useInput";

const UserForm = () => {
  const [firstName, bindFirstname, resetFirstname] = useInput("");
  const [lastName, bindLastname, resetLastname] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstname();
    resetLastname();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input {...bindFirstname} type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLastname} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
