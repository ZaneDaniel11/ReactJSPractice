import { useState } from "react";

export default function SearchData() {
  const [search, SearchData] = useState();
  return (
    <>
      <input
        type="text"
        placeholder="Search for data..."
        value={search}
        onChange={(e) => SearchData(e.target.value)}
      />
    </>
  );
}
