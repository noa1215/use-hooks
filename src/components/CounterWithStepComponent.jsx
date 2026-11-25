import { useCounterWithStep } from "../hooks/useCounterWithStep";

export default function CounterWithStepComponent() {
  const { value, inc, dec, reset } = useCounterWithStep(0, 2);

  return (
    <div>
      <h2>{String(value)}</h2>

      <button onClick={inc}>+2</button>

      <button onClick={dec}>-2</button>

      <button onClick={reset}>reset</button>
    </div>
  );
}
