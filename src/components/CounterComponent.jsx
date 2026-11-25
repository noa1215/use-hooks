import { useCounter } from "../hooks/useCounter";

export default function ToggleComponent() {
  const { value, inc, dec, reset } = useCounter(0);

  return (
    <div>
      <h2>{String(value)}</h2>

      <button onClick={inc}>+1</button>

      <button onClick={dec}>-1</button>

      <button onClick={reset}>reset</button>
    </div>
  );
}
