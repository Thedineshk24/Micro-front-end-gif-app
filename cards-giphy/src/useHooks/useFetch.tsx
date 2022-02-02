import React, { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  console.log("loading", loading);
  

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const { data } = await response.json();
      setData(data);
      setLoading(false);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
