import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

export default function IntervalComponent() {
  const [seconds, setSeconds] = useState(0);
  const { start, stop, isRunning } = useInterval(
    () => setSeconds((currentSeconds) => currentSeconds + 1),
    1000,
    false,
  );

  return (
    <section>
      <h2>Interval</h2>
      <p>Seconds: {seconds}</p>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop} disabled={!isRunning}>Stop</button>
    </section>
  );
}
