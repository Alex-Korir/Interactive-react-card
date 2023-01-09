import React from "react";
import "./App.css";

import MainComponent from "./Components/mainComponent";
import FrontDebitCardComponent from "./Components/frontDebitCardComponent";
import BackDebitCardComponent from "./Components/backDebitCardComponent";

function App() {
  return (
    <>
      <MainComponent />
      <FrontDebitCardComponent />
      <BackDebitCardComponent />
    </>
  );
}

export default App;
