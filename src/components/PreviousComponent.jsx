import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export default function PreviousComponent() {
  const [num, setNum] = useState(0);
  const previousNum = usePrevious(num);

  function inc() {
    setNum((currentNum) => currentNum + 1);
  }

  return (
    <div>
      <p>Current number: {num}</p>
      <p>Previous number: {previousNum ?? "None"}</p>
      <button onClick={inc}>+1</button>
    </div>
  );
}