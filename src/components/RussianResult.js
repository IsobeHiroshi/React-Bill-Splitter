import React, { useEffect, useState } from "react";
const RussianResult = (props) => {
  // Generate a random number to pick a payer randomly
  const randomNum = Math.floor(Math.random() * props.participants.length + 1);
  const billPayer = props.participants[randomNum];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (billPayer == undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [billPayer]);

  if (isLoading) {
    return (
      <div className="russian-result">
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="russian-result">
        <h2>Russian Result</h2>
        <p>
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
      </div>
    );
  }
};

export default RussianResult;
