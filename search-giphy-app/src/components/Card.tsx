import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { returnUseSearch } from "../context/context";

const Cards = ({ keyword }: any) => {
  const [limit, setLimit] = useState<number>(10);

  const { useSearch } = returnUseSearch();

  const { search, loading, error } = useSearch(
    `https://api.giphy.com/v1/gifs/search?api_key=${"YOUR_API_KEY"}&q=${keyword?.split(" ")
      ?.join("")}&limit=${limit}`
  );

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLimit((previoudLimit) => previoudLimit + 10);
      }
    };
  }, [limit]);

  return (
    <div className="flex flex-row flex-wrap justify-center rounded overflow-hidden shadow-lg ml-5 mr-5">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {search.map((item: any) => {
        return (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 border-slate-400"
            key={item?.id}
          >
            <LazyLoadImage
              alt={item?.title}
              src={item?.images?.downsized_medium?.url}
              effect="blur"
              className="w-full"
              placeholderSrc={item?.images?.downsized_small?.url}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {item?.title}
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{item?.type}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
