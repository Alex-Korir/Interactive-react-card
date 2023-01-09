import React, { useState } from "react";
import "./mainComponent.css";

const MainComponent = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  // const [number, setNumber] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  // const [cvc, setCvc] = useState("");

  const handleChange = (ev) => {
    setInputs({ ...inputs, [ev.target.name]: ev.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //const detail = { name, number, month, year, cvc };

    //console.log(detail);
    //alert(`The name you entered was ${inputs.name}`);
    console.log(inputs);
  };
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
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>

            <div className="user-card-heading">
              <p className="card-desc-tags">CARD NUMBER</p>
              <input
                type="text"
                name="number"
                placeholder="e.g. 1234 5678 9123 0000"
                value={inputs.number || ""}
                onChange={handleChange}
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
                    value={inputs.month || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="number"
                    placeholder="YY"
                    className="date-input"
                    value={inputs.year || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="user-card-cvc">
                <p className="card-desc-tags">CVC</p>
                <input
                  type="text"
                  name="number"
                  placeholder="e.g. 123"
                  value={inputs.cvc || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="btn" input="submit">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
