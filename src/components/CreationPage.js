import React, { useState } from "react";
import CreationForm from "./CreationForm";
import EvenResult from "./EvenResult";
import RussianResult from "./RussianResult";

const CreationPage = () => {
  const [splitType, setSplitType] = useState("even");
  const [phase, setPhase] = useState("input");
  const [participants, setParticipants] = useState([]);
  const [totalAmountOfBill, setTotalAmountOfBill] = useState(0);

  const handleTotalAmountOfBillChange = (event) => {
    setTotalAmountOfBill(event.target.value);
  };

  const saveResultAndGoBack = (event) => {
    setPhase("input");
    setParticipants([]);
    setTotalAmountOfBill(0);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault;
    setPhase("result");
    const participantInputs = document.querySelectorAll(".participantInput");
    let temporaryParticipantsArr = [];
    for (let i = 0; i < participantInputs.length; i++) {
      let participant = participantInputs[i].value;
      temporaryParticipantsArr.push(participant);
    }
    setParticipants(temporaryParticipantsArr);
  };

  if (phase == "input") {
    return (
      <CreationForm
        splitType={splitType}
        setSplitType={setSplitType}
        phase={phase}
        setPhase={setPhase}
        handleSubmitForm={handleSubmitForm}
        handleTotalAmountOfBillChange={handleTotalAmountOfBillChange}
      />
    );
  } else if (phase == "result" && splitType == "even") {
    return (
      <EvenResult
        participants={participants}
        totalAmountOfBill={totalAmountOfBill}
        setPhase={setPhase}
        saveResultAndGoBack={saveResultAndGoBack}
      />
    );
  } else if (phase == "result" && splitType == "russianRoulette") {
    return (
      <RussianResult
        participants={participants}
        totalAmountOfBill={totalAmountOfBill}
        setPhase={setPhase}
        saveResultAndGoBack={saveResultAndGoBack}
      />
    );
  }
};

export default CreationPage;
