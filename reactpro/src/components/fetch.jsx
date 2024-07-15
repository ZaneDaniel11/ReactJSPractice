import React, { useState, useEffect } from "react";

export default function Fdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/instagramProject/Home/Code/test.php?userid=1"
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        data.map((item, index) => (
          <div key={index}>
            <p>{item.content.poster_name}</p>
          </div>
        ))
      )}
    </div>
  );
}
