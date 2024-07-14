import { useState } from "react";

export default function PracForm() {
  const [name, SetName] = useState({ FirstName: "", LastName: "" });

  function HandleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      {name.FirstName}-{name.LastName}
      <form action="">
        <input
          onChange={(e) => SetName({ ...name, FirstName: e.target.value })}
          type="text"
          value={name.FirstName}
        />
        <input
          onChange={(e) => SetName({ ...name, LastName: e.target.value })}
          type="text"
          value={name.LastName}
        />

        <button onClick={(e) => HandleSubmit(e)}></button>
      </form>
    </div>
  );
}
