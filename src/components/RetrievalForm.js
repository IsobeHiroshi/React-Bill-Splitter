import React from "react";

const RetrievalForm = (props) => {
  return (
    <div className="history">
      <h2>History</h2>
      <ul>
        {props.historyArr.map((data) => (
          <li key={data._id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RetrievalForm;
