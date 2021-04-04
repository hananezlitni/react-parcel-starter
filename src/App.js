import React from "react";
import { render } from "react-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
};

render(<App />, document.getElementById("root"));
