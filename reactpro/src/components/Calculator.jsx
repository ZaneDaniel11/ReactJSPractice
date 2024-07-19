import { useState } from "react";
import "./calculator.css";
export default function Caculator() {
  const [value1, Value] = useState({ valu1: "", value2: "" });
  const [value3, Value2] = useState("");

  function add() {
    Value2(value1.valu1 + value1.value2);
  }
  function mult() {
    Value2(value1.valu1 * value1.value2);
  }
  function min() {
    Value2(value1.valu1 - value1.value2);
  }

  function devide() {
    Value2(value1.valu1 / value1.value2);
  }
  return (
    <div class="calculator">
      <div className="headerContainer">
        <h1>Calculator</h1>
      </div>
      <h1>{value3}</h1>
      <input
        onChange={(e) => Value({ ...value1, valu1: parseInt(e.target.value) })}
        type="text"
        value={value1.valu1}
      />
      <input
        type="text"
        onChange={(e) => Value({ ...value1, value2: parseInt(e.target.value) })}
        value={value1.value2}
      />
      <div className="buttonContainer">
        <button onClick={add}>+</button>
        <button onClick={mult}>*</button>
        <button onClick={devide}>/</button>
        <button onClick={min}>-</button>
      </div>
    </div>
  );
}
