import axios from "axios";
import React, { useState, useEffect } from "react";
import RetrievalArea from "./RetrievalArea";
const RetrievalPage = () => {
  const [historyArr, setHistoryArr] = useState();

  useEffect(function loadHistory() {
    axios
      .get("/api/v1/splitData")
      .then((results) => {
        setHistoryArr(results.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {historyArr ? (
        <RetrievalArea historyArr={historyArr} />
      ) : (
        <div className="history">Loading...</div>
      )}
    </>
  );
};

export default RetrievalPage;
