import { useEffect, useState } from "react";
import API from "./Api";

const URL = "https://api.balldontlie.io/v1/teams";

export default function FetchAPI() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(URL, {
        headers: {
          Authorization: "4c963049-388d-48a1-8c25-3670d4c65b99",
        },
      });
      const data = await res.json();
      console.log(data);
      setQuery(data.data);
    }

    fetchApi();
  }, []);

  return (
    <div>
      <ul>
        {query.map((team) => (
          <li key={team.id}>
            {team.conference}-{team.division}-{team.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
