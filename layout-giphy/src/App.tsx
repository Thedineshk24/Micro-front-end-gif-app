import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./layout/Header";

import Footer from "./layout/Footer";

const App = () => (
  <>
    <div className="text-3xl mx-auto max-w-6xl bg-blue-500">
      <div className="text-white h-20 flex flex-row justify-center pt-3">
        <Header />
      </div>
    </div>
    <div className="relative mx-auto max-w-6xl h-32 bg-blue-500">
      <div className="absolute inset-x-0 bottom-0 text-white">
        <Footer />
      </div>
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
