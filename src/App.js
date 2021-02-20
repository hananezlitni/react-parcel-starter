import React from "react";
import { render } from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <p>Welcome!</p>
      </main>
      <Footer />
    </>
  );
};

render(<App />, document.getElementById("root"));

/*

"resolutions": {
    "node-forge": "0.10.0"
  }
*/
