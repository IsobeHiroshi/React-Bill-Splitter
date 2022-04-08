import React from "react";
const EvenResult = (props) => {
  const costPerPerson = props.totalAmountOfBill / props.participants.length;

  return (
    <div className="even-result">
      <h2>Even Result</h2>
      <p>Everyone Will Pay ${costPerPerson}.</p>
      <button onClick={(event) => props.saveResultAndGoBack(event)}>
        Save Result and Go Back
      </button>
    </div>
  );
};

export default EvenResult;
