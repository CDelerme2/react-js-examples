import { useEffect, useState } from "react";

export const useDebounce = (text, delay) => {
  const [debounced, setDebounced] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calls the setDebounced() function after 'delay' value in MS
      setDebounced(text);
    }, delay);
    // Cleanup when this component unmounts
    return () => clearTimeout(timer);
  }, [text, delay]);

  return debounced;
};
