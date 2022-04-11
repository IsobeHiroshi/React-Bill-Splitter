import React, { useState, useEffect } from "react";
import CreationForm from "./CreationForm";
import EvenResult from "./EvenResult";
import RussianResult from "./RussianResult";
import axios from "axios";

const CreationPage = () => {
  const [splitType, setSplitType] = useState("even");

  /* Phase will ba either "input" or "result," based on which the form component or the result component is rendered */
  const [phase, setPhase] = useState("input");

  /* Participants and totalAmountOfBill is taken from the CreationForm inputs */
  const [participants, setParticipants] = useState();

  /* States for form change handler in CreationForm.js */
  const [totalAmountOfBill, setTotalAmountOfBill] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();

  const handleSubmitForm = (event) => {
    const participantInputs = document.querySelectorAll(".participantInput");

    /* Once store the participants in a temporary array */
    let temporaryParticipantsArr = [];
    for (let i = 0; i < participantInputs.length; i++) {
      let participant = participantInputs[i].value;
      temporaryParticipantsArr.push(participant);
    }
    /* Set the temporary array to participants state */
    setParticipants(temporaryParticipantsArr);

    let splitData = {
      date: date,
      splitType: splitType,
      participants: temporaryParticipantsArr,
      title: title,
      description: description,
      totalAmountOfBill: parseInt(totalAmountOfBill),
    };

    axios
      .post("/api/v1/splitDataTest", splitData)
      .then((result) => {
        if (result.data.errors) {
          const errorArea = document.getElementById("errorArea");
          errorArea.innerHTML = "";
          for (let i = 0; i < result.data.errors.length; i++) {
            const errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.innerHTML = result.data.errors[i].message;
            errorArea.appendChild(errorMessage);
          }
        } else {
          setPhase("result");
        }
      })
      .catch((error) => console.log(error));
  };

  const saveResultAndGoBack = (event, payer) => {
    let splitData = {
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
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error));

    /* Reset the state when saving the result */
    setPhase("input");
    setSplitType("even");
    setParticipants([]);
    setTotalAmountOfBill(0);
    setDescription("");
    setTitle("");
    setDate("");
  };

  const dontSaveResultAndGoBack = (event) => {
    setPhase("input");
    setSplitType("even");
    setParticipants();
    setTotalAmountOfBill(0);
    setDescription("");
    setTitle("");
    setDate("");
  };

  const useDelay = (msec) => {
    const [waiting, setWaiting] = useState(true);
    useEffect(() => {
      setTimeout(() => setWaiting(false), msec);
    }, []);
    return waiting;
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
        dontSaveResultAndGoBack={dontSaveResultAndGoBack}
        useDelay={useDelay}
      />
    );
  } else if (phase == "result" && splitType == "russianRoulette") {
    return (
      <>
        {participants ? (
          <RussianResult
            participants={participants}
            totalAmountOfBill={totalAmountOfBill}
            setPhase={setPhase}
            saveResultAndGoBack={saveResultAndGoBack}
            dontSaveResultAndGoBack={dontSaveResultAndGoBack}
            useDelay={useDelay}
          />
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </>
    );
  }
};

export default CreationPage;
