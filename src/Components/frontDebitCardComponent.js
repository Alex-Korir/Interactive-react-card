import React, { useState } from "react";
import "./frontDebitCardComponent.css";

const FrontDebitCardComponent = () => {
  const [numbers, setNumbers] = useState("0000 0000 0000 0000");
  const [names, setNames] = useState("JANE APPLESEED");

  return (
    <>
      <div className="mainCard">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        <p className="card-number">{numbers}</p>
        <div className="name-and-date">
          <p className="name">{names}</p>
          <p className="date">00/00</p>
        </div>
      </div>
    </>
  );
};

export default FrontDebitCardComponent;
