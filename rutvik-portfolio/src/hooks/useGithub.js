import { useEffect, useState } from "react";

export default function useGithub(username) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [username]);

  return data;
}