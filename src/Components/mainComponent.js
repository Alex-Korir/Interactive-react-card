import React, { useState } from "react";
import BackDebitCardComponent from "./backDebitCardComponent";
import FrontDebitCardComponent from "./frontDebitCardComponent";
import "./mainComponent.css";
import ThankYou from "./thankYou";
// import { calculateewValue } from "@testing-library/user-event/dist/utils";

const MainComponent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  // const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [pValue, setPValue] = useState({
    number: "0000 0000 0000 0000",
    name: "Jane Appleased",
    year: "00",
    month: "00",
    cvc: "000"
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(name,number,cvc, month);
    if(Object.keys(validationErrors).length === 0){
      console.log("Form is not valid");

      // setName("");
      setError({});
      setSubmitted(true);
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
  
  const validateForm = (name, number, cvc, month) => {
    let errors = {};
    if(!name){
      errors.name = "Cannot be blank!"
    }
    if(!number){
      errors.number = "Cannot be blank!"
    }
    if(!month || !year){
      errors.month = "Cannot be blank!"
    }
    else if(month > 12){
      errors.month = "Insert a valid month"
    }
    else if(year.length < 4){
      errors.month = "Input 4 char for Years!"
    }
    if(!cvc){
      errors.cvc = "Cannot be blank!"
    }

    return errors;
  }

  const handleNumber = (e) => {
    const newValue = e.target.value;
    setNumber(newValue);
    console.log(newValue);

    if(newValue){
      setPValue({...pValue, number: newValue})
    }
  }

  const handleName = (e) => {
    const newValue = e.target.value;
    setName(newValue);
    console.log(newValue);

    if(newValue){
      setPValue({...pValue, name: newValue})
    }
  }

  const handleMonth = (e) => {
    const newValue = e.target.value;
    setMonth(newValue);
    console.log(newValue);

    if(newValue){
      setPValue({...pValue, month: newValue})
    }
  }

  const handleYear = (e) => {
    const newValue = e.target.value;
    setYear(newValue);
    console.log(newValue);

    if(newValue){
      setPValue({...pValue, year: newValue})
    }
  }

  const handleCvc = (e) => {
    const newValue = e.target.value;
    setCvc(newValue);
    console.log(newValue);

    if(newValue){
      setPValue({...pValue, cvc: newValue})
    }
  }
 
  return (
    <>
      <div className="whole-container">
        <div className="upper-section"></div>
        <div className="lower-section">
          {!submitted ? (
            <form className="lower-section-form" onSubmit={handleSubmit}>
              <div className="user-card-heading">
                <p className="card-desc-tags">CARDHOLDER NAME</p>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Jane Apleaseed"
                  value={name}
                  onChange={handleName}
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
                  onChange={handleNumber}
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
                      maxLength={2}
                      value={month}
                      onChange={handleMonth}
                    />
                    <input
                      type="text"
                      name="year"
                      placeholder="YY"
                      className="date-input"
                      maxLength={4}
                      value={year}
                      onChange={handleYear}
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
                    onChange={handleCvc}
                  />
                  {error.cvc && <p className="errorMsg">{error.cvc}</p>}
                </div>
              </div>
              <button className="btn" input="submit">Confirm</button>
            </form>
          ) : (
            <ThankYou/>
          )}  
        </div>
      </div>
      <FrontDebitCardComponent name={name} pValue={pValue} month={month} year={year}/>
      <BackDebitCardComponent cvc={cvc} pValue={pValue}/>
    </>
  );
};

export default MainComponent;
