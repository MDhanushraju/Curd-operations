import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    async function mao() {
      try {
        let data = await fetch("http://localhost:8000/");
        let result = await data.json();
        console.log(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    mao();
  }, []);

  return <></>;
}
