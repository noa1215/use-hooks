import { useWindowSize } from "../hooks/useWindowSize";

export default function WindowSizeComponent() {
  const { width, height } = useWindowSize();

  return (
    <section>
      <h2>Window size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </section>
  );
}
