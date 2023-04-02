import React from "react";
import "./backDebitCardComponent.css";

const BackDebitCardComponent = ({cvc}) => {
  return (
    <>
      <main className="mainBackCard">
        <div className="cvc-section">
          <p>{cvc}</p>
        </div>
      </main>
    </>
  );
};

export default BackDebitCardComponent;
