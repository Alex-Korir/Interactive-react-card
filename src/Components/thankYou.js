import React from 'react'
import myImage from "../images/icon-complete.svg"
import "./thankYou.css"

function ThankYou() {
  const handleReload = () => {
    window.location.reload();
  }
  return (
    <>

      <div className='thankYouContainer'>
        <img src={myImage} alt='complete-logo' />
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button onClick={handleReload}>Continue</button>
      </div>
    </>
  )
}

export default ThankYou