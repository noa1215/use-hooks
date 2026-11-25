import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function DocumentTitleComponent() {
  const [title, setTitle] = useState("React Hooks");
  useDocumentTitle(title);

  return (
    <section>
      <h2>Document title</h2>
      <label>
        Page title:{" "}
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
    </section>
  );
}
