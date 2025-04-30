import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    const clickHandler = (e) => {
      console.log("Document was clicked: " + e);
    };
    document.addEventListener("click", clickHandler);

    return () => {
      console.log("Unmounting phase");
      console.log("Removing phase.........");
      document.removeEventListener("click", clickHandler);
    };
  }, []);
}
