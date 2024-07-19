import { useState } from "react";
import "./calculator.css";
export default function Caculator() {
  const [value1, Value] = useState("");
  const [value2, Value2] = useState("");

  const [result, Result1] = useState(value1, value2);

  function add() {
    Result1(value1 + value2);
  }
  function mult() {
    Result1(value1 * value2);
  }
  function min() {
    Result1(value1 - value2);
  }

  function devide() {
    Result1(value1 / value2);
  }
  return (
    <div class="calculator">
      <div className="headerContainer">
        {" "}
        <h1>Calculator</h1>
      </div>
      <h1>{result}</h1>
      <input
        onChange={(e) => Value(parseInt(e.target.value))}
        type="text"
        value={value1}
      />
      <input
        type="text"
        onChange={(e) => Value2(parseInt(e.target.value))}
        value={value2}
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
