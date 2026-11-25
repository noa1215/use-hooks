import { useEffect, useState } from "react";

export function useKeyPress(key) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        setIsPressed(true);
      }
    }

    function handleKeyUp(event) {
      if (event.key === key) {
        setIsPressed(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key]);

  return isPressed;
}
