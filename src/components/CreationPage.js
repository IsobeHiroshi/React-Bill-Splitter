import React, { useState } from "react";
import CreationForm from "./CreationForm";
import EvenResult from "./EvenResult";
import RussianResult from "./RussianResult";
import axios from "axios";

const CreationPage = () => {
  const [splitType, setSplitType] = useState("even");

  /* Phase will ba either "input" or "result," based on which the form component or the result component is rendered */
  const [phase, setPhase] = useState("input");

  /* Participants and totalAmountOfBill is taken from the CreationForm inputs */
  const [participants, setParticipants] = useState([]);

  /* States for form change handler in CreationForm.js */
  const [totalAmountOfBill, setTotalAmountOfBill] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const saveResultAndGoBack = (event, payer) => {
    const splitData = {
      date: date,
      splitType: splitType,
      participants: participants,
      title: title,
      description: description,
      totalAmountOfBill: parseInt(totalAmountOfBill),
      payer: payer,
    };
    axios
      .post("/api/v1/splitData", splitData)
      .catch((error) => console.log(error));

    /* Reset the state when saving the result */
    setPhase("input");
    setSplitType("even");
    setParticipants([]);
    setTotalAmountOfBill(0);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault;
    setPhase("result");
    const participantInputs = document.querySelectorAll(".participantInput");

    /* Once store the participants in a temporary array */
    let temporaryParticipantsArr = [];
    for (let i = 0; i < participantInputs.length; i++) {
      let participant = participantInputs[i].value;
      temporaryParticipantsArr.push(participant);
    }

    /* Set the temporary array to participants state */
    setParticipants(temporaryParticipantsArr);
  };

  /* Render different components based on the phase and splitType */
  if (phase == "input") {
    return (
      <CreationForm
        splitType={splitType}
        setSplitType={setSplitType}
        phase={phase}
        setPhase={setPhase}
        setDate={setDate}
        setTitle={setTitle}
        setDescription={setDescription}
        handleSubmitForm={handleSubmitForm}
        setTotalAmountOfBill={setTotalAmountOfBill}
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
