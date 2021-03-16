import React from "react";
import { render } from "react-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="container">
      <Main />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
