import React, { useState } from "react";
import CreationPage from "./CreationPage";
import RetrievalPage from "./RetrievalPage.js";

const App = (props) => {
  const [mode, setMode] = useState(true);

  return (
    <>
      <div id="main">
        <h1>Bill Splitter</h1>
        <div id="buttonWrapper">
          <button onClick={(event) => setMode(!mode)}>
            {mode ? "See History" : "Go Back"}
          </button>
        </div>
        {mode ? <CreationPage /> : <RetrievalPage />}
      </div>
      <div id="footer">
        <p>&copy; 2022 Hiroshi Isobe, No Rights Reserved.</p>
      </div>
    </>
  );
};

export default App;
