import React from "react";
const RussianResult = (props) => {
  const randomNum = Math.floor(Math.random() * props.participants.length + 1);
  const billPayer = props.participants[randomNum];

  return (
    <div className="russian-result">
      <h2>Russian Result</h2>
      <p>
        {billPayer} Will Pay ${props.totalAmountOfBill}!
      </p>
      <button onClick={(event) => props.saveResultAndGoBack(event)}>
        Save Result and Go Back
      </button>
    </div>
  );
};

export default RussianResult;
