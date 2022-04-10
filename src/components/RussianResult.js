import React, { useEffect, useState } from "react";
const RussianResult = (props) => {
  // Generate a random number to pick a payer randomly
  const randomNum = Math.floor(Math.random() * props.participants.length + 1);
  const billPayer = props.participants[randomNum];
  const waiting = props.useDelay(2000);

  return (
    <>
      {waiting ? (
        <div className="russian-result">
          <p>Choosing payer... sit tight!</p>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default RussianResult;
