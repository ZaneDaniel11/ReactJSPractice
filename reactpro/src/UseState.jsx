import { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(
        `http://localhost/Instagram-Clone-Project-main/Home/Code/profile.php`
      );
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    fetchUsers();
  }, [data]);

  return (
    <>
      <div>
        {data.map((shesh) => (
          <h1 key={shesh.id}>{shesh.username}</h1>
        ))}
      </div>
    </>
  );
}
