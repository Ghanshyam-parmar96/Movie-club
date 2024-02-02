import { useEffect, useState } from "react";

const useFetch = (url, method="GET") => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async function FatchData(url, method = "GET") {
      try {
        setLoading(true);
        setError(null)
        const res = await fetch(import.meta.env.VITE_BASE_URL + url, {
          method,
          signal,
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
            accept: "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Cancelled");
        }else{
          setError(err.message || "An error occurred");
        }
      } finally {
        setLoading(false);
      }
    })(url, method);

    // Cleanup: cancel the fetch on component unmount
    return () => controller.abort();
  }, [url]);
  return { loading, data, error };
};

export default useFetch;
