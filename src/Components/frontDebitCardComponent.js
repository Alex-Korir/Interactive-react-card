import React from "react";
import "./frontDebitCardComponent.css";






const FrontDebitCardComponent = (props) => {
  const {name, number, month, year} = props.pValue;
  // console.log(items.number);

  return (
    <>
      <div className="mainCard">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        <p className="card-number">{number}</p>
        <div className="name-and-date">
          {<p className="name">{name}</p> }
          <p className="date">{month}/{year}</p>
        </div>
      </div>
    </>
  );
};

export default FrontDebitCardComponent;