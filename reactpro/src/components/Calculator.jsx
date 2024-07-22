import { useEffect, useState } from "react";
import "./calculator.css";

export default function Calculator() {
  const [value1, setValue1] = useState({ valu1: "", value2: "" });
  const [value3, setValue3] = useState("");
  const [operation, setOperation] = useState(null);

  const calculate = () => {
    switch (operation) {
      case "add":
        setValue3(value1.valu1 + value1.value2);
        break;
      case "mult":
        setValue3(value1.valu1 * value1.value2);
        break;
      case "min":
        setValue3(value1.valu1 - value1.value2);
        break;
      case "divide":
        setValue3(value1.valu1 / value1.value2);
        break;
      default:
        setValue3("");
        break;
    }
  };

  useEffect(() => {
    if (operation) {
      calculate();
    }
  }, [value1, operation]);

  return (
    <div className="calculator">
      <div className="headerContainer">
        <h1>Calculator</h1>
      </div>
      <h1>{value3}</h1>
      <input
        onChange={(e) =>
          setValue1({ ...value1, valu1: parseInt(e.target.value) })
        }
        type="text"
        value={value1.valu1}
      />
      <input
        type="text"
        onChange={(e) =>
          setValue1({ ...value1, value2: parseInt(e.target.value) })
        }
        value={value1.value2}
      />
      <div className="buttonContainer">
        <button onClick={() => setOperation("add")}>+</button>
        <button onClick={() => setOperation("mult")}>*</button>
        <button onClick={() => setOperation("divide")}>/</button>
        <button onClick={() => setOperation("min")}>-</button>
      </div>
    </div>
  );
}
