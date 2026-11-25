//סעיף 1

import useToggle from "../hooks/useToggle";

export default function ToggleComponent() {
  const { value, toggle, setTrue, setFalse } = useToggle();

  return (
    <div>
      <h2>{String(value)}</h2>

      <button onClick={toggle}>Toggle</button>

      <button onClick={setTrue}>Set True</button>

      <button onClick={setFalse}>Set False</button>
    </div>
  );
}
