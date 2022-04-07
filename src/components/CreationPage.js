import React, { useState } from "react";
import CreationForm from "./CreationForm";
import EvenResult from "./EvenResult";
import RussianResult from "./RussianResult";

const CreationPage = () => {
  const [splitType, setSplitType] = useState("even");
  const [phase, setPhase] = useState("input");

  if (phase == "input") {
    return (
      <CreationForm
        splitType={splitType}
        setSplitType={setSplitType}
        phase={phase}
        setPhase={setPhase}
      />
    );
  } else if (phase == "result" && splitType == "even") {
    return <EvenResult />;
  } else if (phase == "result" && splitType == "russianRoulette") {
    return <RussianResult />;
  }
};

export default CreationPage;
