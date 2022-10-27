import React from "react";
import "./App.css";

import MainComponent from "./Components/mainComponent";
import FrontDebitCardComponent from "./Components/frontDebitCardComponent";
import BackDebitCardComponent from "./Components/backDebitCardComponent";

function App() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const detail = { name, number, month, year, cvc };

    //   console.log(detail);
    // };
  return (
    <>
      <MainComponent
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
        setName={setName}
        setNumber={setNumber}
        setMonth={setMonth}
        setYear={setYear}
        setCvc={setCvc}
      />
      <FrontDebitCardComponent
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />
      <BackDebitCardComponent />
    </>
  );
}

export default App;
