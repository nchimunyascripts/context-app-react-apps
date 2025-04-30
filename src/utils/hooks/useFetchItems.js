import { useEffect, useState } from "react";

export function useFetchItem() {
  const [itemData, setItemData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch("http://localhost:5000/api/items", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setItemData(data);
        setError(undefined);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    return () => {
      setLoading(false);
      controller.abort();
    };
  }, []);
  return { itemData, loading, error };
}
