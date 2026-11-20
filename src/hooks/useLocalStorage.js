import { useState } from "react";

export default function useLocalStorage(key) {
  const [data, setdata] = useState(
    JSON.parse(window.localStorage.getItem(key)),
  );

  function setItem(value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return { data, setItem };
}
