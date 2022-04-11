import React, { useState } from "react";
import DetailModal from "./DetailModal";

const RetrievalArea = (props) => {
  /* State to toggle the detail modal */
  const [showDetail, setShowDetail] = useState(false);
  /* State to store the id the history data */
  const [whichHistory, setWhichHistory] = useState();

  return (
    <>
      <div className="history">
        <h2>History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Total Bill</th>
              <th>Split Type</th>
              <th>Payer</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {props.historyArr.map((data) => (
              <tr key={data._id}>
                <td>{data.date.substr(0, 10)}</td>
                <td>{data.title}</td>
                <td>${data.totalAmountOfBill}</td>
                <td>
                  {/* Make the fetched property more readable */}
                  {data.splitType == "even" ? "Even" : "Russian Roulette"}
                </td>
                <td>{data.payer == "everyone" ? "Everyone" : data.payer}</td>
                <td>
                  <button
                    className={data._id}
                    onClick={(event) => {
                      setShowDetail(!showDetail);
                      /* Get the id of the history data and pass it to the child component */
                      setWhichHistory(event.target.className);
                    }}
                  >
                    See Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDetail ? (
        <DetailModal
          setShowDetail={setShowDetail}
          showDetail={showDetail}
          historyArr={props.historyArr}
          whichHistory={whichHistory}
          setWhichHistory={setWhichHistory}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default RetrievalArea;
