import "./App.css";
import React from "react";
import CreationForm from "../CreationForm/CreationForm";

const App = (props) => {
  return (
    <>
      <div className="main">
        <h1>Bill Splitter</h1>
        <CreationForm />
      </div>
    </>
  );
};

export default App;
