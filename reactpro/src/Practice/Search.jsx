import { useState } from "react";

export default function Search() {
  const [inputdata, InputData] = useState({ name: "", lastname: "" });
  return (
    <div>
      {inputdata.name}--{inputdata.lastname}
      <form action="">
        <input
          type="text"
          onChange={(e) => {
            InputData({ ...inputdata, name: e.target.value });
          }}
          value={inputdata.name}
        />
        <input
          type="text"
          onChange={(e) => {
            InputData({ ...inputdata, lastname: e.target.value });
          }}
        />
        <button
          onSubmit={(e) => {
            e.preventDefault;
          }}
        ></button>
      </form>
    </div>
  );
}
