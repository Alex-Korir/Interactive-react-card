import React, { useState } from "react";
import "./frontDebitCardComponent.css";

const FrontDebitCardComponent = () => {
  const [name, setName] = useState("JANE APPLESEED");
  const functiony = () => {
    console.log({ name });
  };
  return (
    <>
      <div className="mainCard">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        <p className="card-number">0000 0000 0000 0000</p>
        <div className="name-and-date">
          <p className="name">{name}</p>
          <p className="date">00/00</p>
        </div>
      </div>
    </>
  );
};

export default FrontDebitCardComponent;
