import React from "react";
const EvenResult = (props) => {
  const costPerPerson = props.totalAmountOfBill / props.participants.length;

  return (
    <div className="even-result">
      <h2>Result(Even)</h2>
      <p>Everyone Will Pay ${costPerPerson}.</p>
      {/* saveResultAndGoBack() is declared in CreationPage.js */}
      <button onClick={(event) => props.saveResultAndGoBack(event, "everyone")}>
        Save Result and Go Back
      </button>
      <button onClick={(event) => props.dontSaveResultAndGoBack(event)}>
        Don't Save and Go Back
      </button>
    </div>
  );
};

export default EvenResult;
