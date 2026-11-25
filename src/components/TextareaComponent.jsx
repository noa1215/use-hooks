import { useTextarea } from "../hooks/useTextarea";

export default function TextareaComponent() {
  const { value, handleChange, reset } = useTextarea("");

  return (
    <div>
      <textarea value={value} onChange={handleChange} />
      <p>{value}</p>
      <button onClick={reset}>reset</button>
    </div>
  );
}
