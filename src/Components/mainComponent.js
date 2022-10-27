import React, { useState } from "react";
import "./mainComponent.css";

const MainComponent = () => {
  const [name, number, month, year, cvc, setName, setNumber, setMonth, setYear, setCvc] = props
  return (
    <>
      <div className="whole-container">
        <div className="upper-section"></div>
        <div className="lower-section">
          <form className="lower-section-form" onSubmit={handleSubmit}>
            <div className="user-card-heading">
              <p className="card-desc-tags">CARDHOLDER NAME</p>
              <input
                type="text"
                required
                name="name"
                id=""
                placeholder="e.g. Jane Apleaseed"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="user-card-heading">
              <p className="card-desc-tags">CARD NUMBER</p>
              <input
                type="text"
                name="number"
                placeholder="e.g. 1234 5678 9123 0000"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
            <div className="user-card-heading user-card-date">
              <div className="card-date-input">
                <p className="card-desc-tags">EXP. DATE (MM/YY)</p>
                <div className="card-input-month-year">
                  <input
                    type="text"
                    name="number"
                    placeholder="MM"
                    className="date-input"
                    value={month}
                    onChange={(e) => {
                      setMonth(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    name="number"
                    placeholder="YY"
                    className="date-input"
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="user-card-cvc">
                <p className="card-desc-tags">CVC</p>
                <input
                  type="text"
                  name="number"
                  placeholder="e.g. 123"
                  value={cvc}
                  onChange={(e) => {
                    setCvc(e.target.value);
                  }}
                />
              </div>
            </div>
            <button className="btn" onClick={handleOutput}>Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
