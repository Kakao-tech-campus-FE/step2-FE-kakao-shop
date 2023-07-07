import { useState, useEffect } from 'react';

const useFetch = (url, option) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (option) {
          const response = await fetch(url, option);
          const jsonData = await response.json();
          setData(jsonData);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, option]);

  return { data, loading, error };
};

export default useFetch;

