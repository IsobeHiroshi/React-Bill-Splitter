import React from "react";
const RussianResult = (props) => {
  // Pick a payer randomly from participants array
  const billPayer =
    props.participants[Math.floor(Math.random() * props.participants.length)];
  const waiting = props.useDelay(2000);

  return (
    <>
      {!waiting && billPayer ? (
        <div className="russian-result">
          <h2>Result(Russian Roulette)</h2>
          <p className="russian-payer">
            {billPayer} Will Pay ${props.totalAmountOfBill}!
          </p>
          {/* saveResultAndGoBack() is declared in CreationPage.js */}
          <button
            onClick={(event) => {
              props.saveResultAndGoBack(event, billPayer);
            }}
          >
            Save Result and Go Back
          </button>
          <button onClick={(event) => props.dontSaveResultAndGoBack(event)}>
            Don't Save and Go Back
          </button>
        </div>
      ) : (
        <div className="russian-result">
          <p>Choosing payer... sit tight!</p>
        </div>
      )}
    </>
  );
};

export default RussianResult;
