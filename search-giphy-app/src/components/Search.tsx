import React, { useState } from "react";
import Cards from "./Card";

const Search = () => {
  const [keyword, setKeyword] = useState<string>("");
  return (
    <>
      <input
        onChange={(e) => setKeyword(e.target.value)}
        className="p-3 w-full text-black"
        placeholder="search gifs..."
      />
      <Cards keyword={keyword} />
    </>
  );
};

export default Search;
