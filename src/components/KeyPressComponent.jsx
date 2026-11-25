import { useKeyPress } from "../hooks/useKeyPress";

export default function KeyPressComponent() {
  const isShiftPressed = useKeyPress("Shift");

  return (
    <section>
      <h2>Key press</h2>
      <p>{isShiftPressed ? "Shift is pressed." : "Shift is released."}</p>
    </section>
  );
}
