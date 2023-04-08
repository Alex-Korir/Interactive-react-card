import React, { useState } from "react";
import BackDebitCardComponent from "./backDebitCardComponent";
import FrontDebitCardComponent from "./frontDebitCardComponent";
import "./mainComponent.css";

const MainComponent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  // const [items, setItems] = useState([]);
  const [error, setError] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(name,number,cvc);
    if(Object.keys(validationErrors).length === 0){
      console.log("Form is not valid");

      // setName("");
      setError({});
    }
    else{
      setError(validationErrors);
    }
    // if(name && year && month && cvc && number){
    //   const person = {name:name, year:year, month: month, cvc: cvc, number: number};
    //   setItems((items)=> {
    //     return(
    //       [...items, person]
    //     )
    //   })
    //   setName("");
    //   setCvc("");
    //   setYear("");
    //   setMonth("");
    //   setNumber("");
    // }
    // else{
    //   console.log("Empty values");
    // }
  };

  const handleOnchangeNumber = (e, value) => {
    setNumber(e.target.value);
    if(!/^\d*$/.test(value)){
      setError({...error, number: "Wrong Format, numbers only"});
    }
    else{
      setError({...error, number: ""});
    }
  }
  
  const validateForm = (name, number, cvc) => {
    let errors = {};
    if(!name){
      errors.name = "Cannot be blank"
    }
    if(!number){
      errors.number = "Cannot be blank"
    }else if(!/^\d*$/.test(number)){
      errors.number = "Wrong format, numbers only"
    }
    if(!cvc){
      errors.cvc = "Cannot be blank"
    }
    if(!cvc){
      errors.month = "Cannot be blank"
    }

    return errors;
  }
 
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
                name="name"
                placeholder="e.g. Jane Apleaseed"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error.name && <p className="errorMsg">{error.name}</p>}
            </div>

            <div className="user-card-heading">
              <p className="card-desc-tags">CARD NUMBER</p>
              <input
                type="text"
                name="number"
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength={19}
                value={number.replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                // pattern="[0-9]*"
                onChange={handleOnchangeNumber}
              />
              {error.number && <p className="errorMsg">{error.number}</p>}
            </div>
            <div className="user-card-heading user-card-date">
              <div className="card-date-input">
                <p className="card-desc-tags">EXP. DATE (MM/YY)</p>
                <div className="card-input-month-year">
                  <input
                    type="text"
                    name="month"
                    placeholder="MM"
                    className="date-input"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  <input
                    type="text"
                    name="year"
                    placeholder="YY"
                    className="date-input"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                {error.month && <p className="errorMsg">{error.month}</p>}
              </div>
              <div className="user-card-cvc">
                <p className="card-desc-tags">CVC</p>
                <input
                  type="text"
                  name="cvc"
                  placeholder="e.g. 123"
                  value={cvc}
                  maxLength={3}
                  onChange={(e) => setCvc(e.target.value)}
                />
                {error.cvc && <p className="errorMsg">{error.cvc}</p>}
              </div>
            </div>
            <button className="btn" input="submit">Confirm</button>
          </form>
        </div>
      </div>
      <FrontDebitCardComponent name={name} number={number} month={month} year={year}/>
      <BackDebitCardComponent cvc={cvc}/>
    </>
  );
};

export default MainComponent;
