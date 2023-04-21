import React from "react";
import "./frontDebitCardComponent.css";
import { useState } from "react";





const FrontDebitCardComponent = (props) => {
  const {name, number, month, year} = props;
  // console.log(items.number);\
  const [details, setDetails] = useState("0000 0000 0000 0000");

  return (
    <>
      <div className="mainCard">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        <p className="card-number" onChange={(e) => setDetails(number)}>{details}</p>
        <div className="name-and-date">
          {<p className="name">{name}</p> }
          <p className="date">{month}/{year}</p>
        </div>
      </div>
    </>
  );
};

export default FrontDebitCardComponent;