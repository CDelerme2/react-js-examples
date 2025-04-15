import { useNavigate } from "react-router-dom";

export const ReactRouterExample = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/concepts")}>Go to JS Concepts</button>
      </div>
      <div>
        <button onClick={() => navigate("/hooks")}>Go to React Hooks</button>
      </div>
    </>
  );
};
