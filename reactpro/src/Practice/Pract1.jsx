import React, { useEffect, useState } from "react";
import "./prac.css";

export default function Practice() {
  const [active, Activebut] = useState(false);
  function activebtn() {
    Activebut(!active);
  }

  return (
    <>
      <div>
        <h1 className={active ? "active" : "unactive"}>hey</h1>
        <button onClick={activebtn}>hey</button>
      </div>
    </>
  );
}
