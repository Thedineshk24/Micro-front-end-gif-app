import React from "react";
import ReactDOM from "react-dom";
import Cards from "./components/Cards";

import "./index.scss";

const App = () => (
  <>
      <div className="flex flex-row justify-center text-6xl text-white">
        Micro Frontend Gifs App
      </div>
      <Cards />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
