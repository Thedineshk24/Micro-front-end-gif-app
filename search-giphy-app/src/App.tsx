import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Cards from "./components/Card";
import Search from "./components/Search";
import { GiphyProvider } from "./context/context";

import "./index.scss";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Search/>
    </div>
  );
};
ReactDOM.render(
  <GiphyProvider>
    <App />
  </GiphyProvider>,
  document.getElementById("app")
);
