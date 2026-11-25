import { useInput } from "../hooks/useInput";

export default function InputComponent() {
  const { value, handleChange, reset } = useInput("");

  return (
    <div>
      <label >
        <input type="text" value={value} onChange={handleChange} />
      </label>

    
      <button onClick={reset}>reset</button>
    </div>
  );
}
