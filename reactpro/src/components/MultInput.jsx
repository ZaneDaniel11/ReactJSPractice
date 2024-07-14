import { useState } from "react";

export default function MultInput() {
  const [name, SetName] = useState({ Firstname: "", LastName: "" });
  return (
    <div>
      {name.Firstname}-{name.LastName}
      <form>
        <input
          onChange={(e) => SetName({ ...name, Firstname: e.target.value })}
          type="text"
          value={name.Firstname}
        />
        <input
          onChange={(e) => SetName({ ...name, LastName: e.target.value })}
          type="text"
          value={name.LastName}
        />
      </form>
    </div>
  );
}
