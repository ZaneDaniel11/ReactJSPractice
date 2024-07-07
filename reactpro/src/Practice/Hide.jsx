import { useState } from "react";

export default function Hide() {
  const [hide, setHide] = useState(true);

  function toggleText() {
    setHide(!hide);
  }

  return (
    <div>
      {hide && <h1>Hey</h1>}
      <button onClick={toggleText}>{hide ? "Hide" : "Show"}</button>
    </div>
  );
}
