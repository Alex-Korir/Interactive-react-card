import React from "react";
import "./backDebitCardComponent.css";

const BackDebitCardComponent = (props) => {
  const {cvc} = props.pValue;
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
