import React, { useState } from "react";
import "./move.css";
export default function Movebt() {
  const [pos, setPosition] = useState(true);

  function movebtn() {
    setPosition(!pos);
  }
  return (
    <>
      <div className="Parents">
        <button onClick={movebtn} className={pos ? "Move" : "moving"}>
          Move Div
        </button>
      </div>
    </>
  );
}
