import { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";

export default function TimeoutComponent() {
  const [message, setMessage] = useState("");
  const { start, cancel, isScheduled } = useTimeout(
    () => setMessage("The 3-second timeout has finished."),
    3000,
    false,
  );

  return (
    <section>
      <h2>Timeout</h2>
      <p>{message || "No message yet."}</p>
      <button onClick={start} disabled={isScheduled}>Start</button>
      <button onClick={cancel} disabled={!isScheduled}>Cancel</button>
    </section>
  );
}
