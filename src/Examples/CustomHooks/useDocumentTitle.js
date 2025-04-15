import { useEffect } from "react";

export function useDocumentTitle(count) {
  useEffect(() => {
    // Set page title using browser's document API
    document.title = `Count: ${count}`;
  }, [count]);
}

export default useDocumentTitle;
