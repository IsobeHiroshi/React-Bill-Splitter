import axios from "axios";
import React, { useState, useEffect } from "react";
import RetrievalArea from "./RetrievalArea";
const RetrievalPage = () => {
  /* State to store the history data fetched from the database*/
  const [historyArr, setHistoryArr] = useState();
  /* State to toggle the detail modal */
  const [showDetail, setShowDetail] = useState(false);

  // Fetch all the history data from the database
  const loadHistory = () => {
    axios
      .get("/api/v1/splitData")
      .then((results) => {
        setHistoryArr(results.data);
      })
      .catch((error) => console.log(error));
  };
  // Re-render(update) the component when the modal is toggled
  useEffect(loadHistory, [showDetail]);

  return (
    <>
      {historyArr ? (
        <RetrievalArea
          setHistoryArr={setHistoryArr}
          historyArr={historyArr}
          loadHistory={loadHistory}
          setShowDetail={setShowDetail}
          showDetail={showDetail}
        />
      ) : (
        <div className="history">Loading...</div>
      )}
    </>
  );
};

export default RetrievalPage;
