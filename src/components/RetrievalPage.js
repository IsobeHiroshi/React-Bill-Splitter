import axios from "axios";
import React, { useState, useEffect } from "react";
import RetrievalForm from "./RetrievalForm";
const RetrievalPage = () => {
  const [historyArr, setHistoryArr] = useState();

  useEffect(function loadHistory() {
    axios
      .get("/api/v1/splitData")
      .then((results) => {
        console.log(results.data);
        setHistoryArr(results.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <>{historyArr ? <RetrievalForm historyArr={historyArr} /> : ""}</>;
};

export default RetrievalPage;
