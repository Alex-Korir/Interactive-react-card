import React, { useState } from "react";
import "./frontDebitCardComponent.css";

const FrontDebitCardComponent = ({items}) => {
  console.log(items.number);
  return (
    <>
      <div className="mainCard">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        <p className="card-number">{"0000 0000 0000 0000" && items.number}</p>
        <div className="name-and-date">
          <p className="name">Alex Kipkorir</p>
          <p className="date"></p>
        </div>
      </div>
    </>
  );
};

export default FrontDebitCardComponent;
