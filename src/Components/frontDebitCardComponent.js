import React from "react";
import "./frontDebitCardComponent.css";

const FrontDebitCardComponent = (props) => {

  return (
    <>
      <div className="mainCard">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        {
          props.items.map((item)=>{
            const {id, name, month, year, number} = item;
            console.log(item);
            return(
              <div>
                 <p className="card-number" placeholder="000000000000">{number}</p>
                 <div className="name-and-date">
                  <p className="name">{name}</p>
                  <p className="date">{month}/{year}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* <div className="mainCard">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        <p className="card-number"></p>
        <div className="name-and-date">
          <p className="name">{name}</p>
          <p className="date"></p>
        </div>
      </div> */}
    </>
  );
};

export default FrontDebitCardComponent;
