import { useEffect, useState } from "react";

export default function UseEffectPrac() {
  const [data, ViewData] = useState();

  useEffect(() => {
    function DataView() {
      console.log("Shesh");
    }
    DataView();
  }, [data]);
  return <div></div>;
}
