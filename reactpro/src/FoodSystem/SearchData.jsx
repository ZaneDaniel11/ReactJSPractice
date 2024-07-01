import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "48845d35318a4d67a1e1ecf4333e6d14";
export default function SearchData() {
  const [search, SearchData] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);

      const result = await response.json();
      console.log(result);
    }
    fetchFood();
  }, [search]);
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
