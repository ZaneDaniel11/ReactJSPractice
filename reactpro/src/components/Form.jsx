import { useState } from "react";

export default function Form() {
  const [data, Formdate] = useState();

  function Data(e) {
    Formdate(e.target.value);
  }
  console.log(data);
  return (
    <div>
      <form>
        <input
          onChange={(e) => Formdate(e.target.value)}
          type="text"
          value={data}
        />
      </form>
    </div>
  );
}
