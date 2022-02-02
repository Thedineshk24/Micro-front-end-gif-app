import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
// @ts-ignore
import Header from "layout_giphy/Header";
// @ts-ignore
import Footer from "layout_giphy/Footer";
// @ts-ignore
const Search = lazy(() => import("search_giphy_app/SearchGiphy"));
// @ts-ignore
const Cards = lazy(() => import("cards_giphy/Cards"));
// @ts-ignore
import { GiphyProvider } from "search_giphy_app/store";

const App = () => (
  <>
    <div className="text-3xl mx-auto max-w-6xl bg-gray-500 h-25">
      <div className="text-white h-20 flex flex-row justify-center pt-2">
        <Header />
      </div>
    </div>
    <div className="flex flex-row flex-wrap justify-center mx-auto max-w-6xl">
      <Suspense fallback={<div>Loading...</div>}>
        <Search />
      </Suspense>
    </div>
    <div className="flex flex-row justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Cards />
      </Suspense>
    </div>
    <div className="relative mx-auto max-w-6xl h-25 bg-gray-500 mt-5">
      <div className="absolute inset-x-0 bottom-0 text-white pb-4">
        <Footer />
      </div>
    </div>
  </>
);
ReactDOM.render(
  <GiphyProvider>
    <App />
  </GiphyProvider>,
  document.getElementById("app")
);
