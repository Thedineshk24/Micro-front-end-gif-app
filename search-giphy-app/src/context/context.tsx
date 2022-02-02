import React, { createContext, useContext, useState, useEffect } from "react";

export const GiphyContext = createContext(null);

const useSearch = (url?: string) => {
  const [search, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "GET",
      });
      const { data } = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    searchData();
  }, [url]);

  return { search, loading, error };
};

export const returnUseSearch = (url?: string) => {
  return useContext(GiphyContext);
};

export const GiphyProvider = ({ children }) => {
  return <GiphyContext.Provider value={{useSearch}}>{children}</GiphyContext.Provider>;
};
