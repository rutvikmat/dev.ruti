import { useEffect, useState } from "react";

export default function useGithub(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchGithub = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!res.ok) {
          throw new Error("GitHub API error");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("GitHub Fetch Error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithub();
  }, [username]);

  return { data, loading, error };
}