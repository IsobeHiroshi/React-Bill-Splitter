import React, { useState } from "react";
import CreationForm from "./CreationForm";
import RetrievalForm from "./RetrievalForm.js";

const App = (props) => {
  const [mode, setMode] = useState(true);

  return (
    <>
      <div id="main">
        <h1>Bill Splitter</h1>
        <div id="buttonWrapper">
          <button onClick={(event) => setMode(!mode)}>
            {mode ? "See History" : "Create New"}
          </button>
        </div>
        {mode ? <CreationForm /> : <RetrievalForm />}
      </div>
    </>
  );
};

export default App;
