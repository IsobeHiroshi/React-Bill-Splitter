import axios from "axios";
import React from "react";
const DetailModal = (props) => {
  /* Find the desired history data based on the id passed from the parent */
  const detailHistory = props.historyArr.find(
    (history) => history._id === props.whichHistory
  );

  const deleteHistoryHandler = (event, historyId) => {
    let deleteId = {
      id: historyId,
    };
    axios
      .patch("/api/v1/splitData", deleteId)
      .then(props.setShowDetail(!props.showDetail))
      .then(props.setWhichHistory(""))
      .catch((error) => console.log(error));
  };

  return (
    <div id="history-detail">
      <h3>Detail</h3>
      <section id="detailSection">
        <p>Date: {detailHistory.date.substr(0, 10)}</p>
        <p>Title: {detailHistory.title}</p>
        <p>Total Bill: ${detailHistory.totalAmountOfBill}</p>
        <p>
          Split Type:{" "}
          {detailHistory.splitType == "even" ? "Even" : "Russian Roulette"}
        </p>
        <p>
          Payer:{" "}
          {detailHistory.payer == "everyone" ? "Everyone" : detailHistory.payer}
        </p>
        <div>
          Participants:
          <ul>
            {detailHistory.participants.map((participant) => (
              <li key={participant}>{participant}</li>
            ))}
          </ul>
        </div>
        <p>Description: {detailHistory.description}</p>
      </section>

      <button
        onClick={(event) => {
          props.setShowDetail(!props.showDetail);
          props.setWhichHistory("");
        }}
      >
        Close
      </button>
      <button
        onClick={(event) => deleteHistoryHandler(event, props.whichHistory)}
      >
        Delete this
      </button>
    </div>
  );
};

export default DetailModal;
