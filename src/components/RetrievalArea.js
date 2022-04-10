import React from "react";

const RetrievalArea = (props) => {
  return (
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
          </tr>
        </thead>
        <tbody>
          {props.historyArr.map((data) => (
            <tr key={data._id}>
              <td>{data.date.substr(0, 10)}</td>
              <td>{data.title}</td>
              <td>{data.totalAmountOfBill}</td>
              <td>{data.splitType}</td>
              <td>{data.payer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RetrievalArea;
